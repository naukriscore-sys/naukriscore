"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faCheckDouble,
  faL,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import {
  useChatMutation,
  useLazyGetOldchatQuery,
  useLazyGetResumeStatusQuery,
  useUploadResumeMutation,
} from "@/redux/service/profileBuilderchat";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeProgess } from "@/redux/slice/progressBar";
import { TypingIndicator } from "@/core";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DailogContent } from "./dialogContent";
import { useTextFocusContext } from "@/context/text-focus";
import { Spinner } from "@/components/ui/spinner";
import { ScoreCard } from "./ScoreCard";
import { InputBoxCard } from "./inputBoxCard";

type role = "user" | "assistant";

interface Message {
  createdAt: string;
  sender: role;
  text: string;
}

export const ProfileChatarea = ({
  setScoregenerated,
  scoreGenerated,
}: {
  scoreGenerated: number | null;
  setScoregenerated: Dispatch<SetStateAction<number | null>>;
}) => {
  const [resumePolling, setResumepolling] = useState(false);
  const [chatStartedmanual, setchatStartedmanual] = useState(false);
  const [chatStartedresume, setChatStartedresume] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chat, { isLoading }] = useChatMutation();
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const [trigger, result] = useLazyGetOldchatQuery();
  const [file, setFile] = useState<File | null>(null);
  const [uploadResumecall, { data, isLoading: uploadResumeLoading }] =
    useUploadResumeMutation();
  const [triggerGetResumeStatus] = useLazyGetResumeStatusQuery();
  const user = useAppSelector((state) => state.userData.name);
  const [takeInput, setTakeInput] = useState(false);
  const [documentType, setDocumentType] = useState<string | null>(null);
  const [uploadFileLabel, setUploadFileLabel] = useState<string | null>();
  const [uploadCompleted, setUploadCompleted] = useState<string>("");

  useEffect(() => {
    trigger();
  }, []);

  const addUploadMessage = (message: string) => {
    const newUserMessage: Message = {
      createdAt: new Date().toISOString(),
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, newUserMessage]);

    if (chatStartedresume) {
      sendMessage(message, "resume");
    } else {
      sendMessage(message, "manual");
    }
  };

  // useEffect(() => {
  //   let response;
  //   console.log("this is a result = ", result?.data?.data);
  //   let oldMessages: Message[] = [];
  //   if (result) {
  //     result?.data?.data?.forEach((message: any) => {
  //       if (message?.text?.includes("relatedTo")) {
  //         const splitMessages = message?.text?.split("relatedTo");
  //         response = splitMessages[0].replace("response:", "").trim();

  //         const regex = /\((\d+)\)/;
  //         const match = response.match(regex);

  //         if (match) {
  //           const numberAsString = match[1];
  //           const number = Number(numberAsString);

  //           if (!isNaN(number)) {
  //             setScoregenerated(number);
  //           }
  //         }
  //         // console.log(response);
  //         const newObj = {
  //           createdAt: message?.createdAt,
  //           sender: message?.sender,
  //           text: response,
  //         };
  //         oldMessages.push(newObj);
  //       } else {
  //         response = message || "...";
  //         oldMessages.push(response);
  //       }
  //     });
  //   }
  //   setMessages(oldMessages);
  // }, [result]);
  useEffect(() => {
    if (!result?.data?.data) return;

    const incomingArray = result.data.data; // ← this is an array
    const finalMessages: Message[] = [];

    incomingArray.forEach((msg: any) => {
      if (!msg?.text) return;

      let cleaned = msg.text;
      let scoreFromText: number | null = null;

      // Remove relatedTo block
      if (cleaned.includes("relatedTo")) {
        cleaned = cleaned.split("relatedTo")[0].replace("response:", "").trim();
      } else {
        cleaned = cleaned.replace("response:", "").trim();
      }

      // Extract score if available
      const regex = /\((\d+)\)/;
      const match = cleaned.match(regex);

      if (match) {
        scoreFromText = Number(match[1]);
        if (!isNaN(scoreFromText)) setScoregenerated(scoreFromText);
      }

      finalMessages.push({
        createdAt: msg.createdAt || new Date().toISOString(),
        sender: msg.sender || "assistant",
        text: cleaned,
      });
    });

    setMessages(finalMessages);
  }, [result]);

  if (result?.isError) {
    toast.error("Something went wrong while fetching previous Chats");
  }

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
    console.log("these are the messages = ", messages);
  }, [messages]);

  const formik = useFormik({
    initialValues: {
      input: "",
    },
    onSubmit: (values) => {
      if (!values.input.trim()) return;

      const newUserMessage: Message = {
        createdAt: new Date().toISOString(),
        sender: "user",
        text: values.input,
      };

      setMessages((prev) => [...prev, newUserMessage]);

      if (chatStartedresume) {
        sendMessage(values.input, "resume");
      } else {
        sendMessage(values.input, "manual");
      }

      formik.resetForm();
    },
  });

  const startChatmanually = () => {
    setchatStartedmanual(true);

    const helloMessage: Message = {
      createdAt: new Date().toISOString(),
      sender: "user",
      text: `Hello, ${user} this side`,
    };

    if (messages?.length === 0) {
      setMessages((prev) => [...(prev || []), helloMessage]);
      sendMessage(`Hello, ${user} this side`, "manual");
    }
  };

  // const sendMessage = async (
  //   userMessage: string,
  //   type: string,
  //   isResumeFetched?: boolean
  // ) => {
  //   let data;

  //   if (isResumeFetched) {
  //     data = {
  //       resume: userMessage,
  //       message: "Above is my resume data",
  //     };
  //   } else {
  //     data = {
  //       message: userMessage,
  //     };
  //   }

  //   try {
  //     const res = await chat({ data, type }).unwrap();
  //     let response;
  //     if (res?.data?.includes("relatedTo")) {
  //       const messages = res.data.split("relatedTo");
  //       response = messages[0].replace("response:", "").trim();

  //       const regex = /\((\d+)\)/;
  //       const match = response.match(regex);

  //       if (match) {
  //         const numberAsString = match[1];
  //         const number = Number(numberAsString);

  //         if (!isNaN(number)) {
  //           setScoregenerated(number);
  //         } else {
  //           console.log("Invalid number inside parentheses");
  //         }
  //       }

  //       const relatedto = messages[1].trim();
  //       if (relatedto) {
  //         const cleanRelatedTo = relatedto.replace(/"/g, "").trim();
  //         const finalRelatedTo = cleanRelatedTo.split(": ")[1];

  //         if (finalRelatedTo === "profilePhoto") {
  //           setUploadFileLabel("Please Upload Profile Photo");
  //           setDocumentType("profilePhoto");
  //           setTakeInput(true);
  //         } else if (finalRelatedTo === "aadhaarCard") {
  //           setUploadFileLabel("Please Upload Aadhar Card Photo");
  //           setDocumentType("aadhaarCard");
  //           setTakeInput(true);
  //         } else if (finalRelatedTo === "panCard") {
  //           setUploadFileLabel("Please Upload Pan Card Photo");
  //           setDocumentType("panCard");
  //           setTakeInput(true);
  //         } else if (finalRelatedTo === "offerLetter") {
  //           setUploadFileLabel("Please Upload Offer Letter");
  //           setDocumentType("offerLetter");
  //           setTakeInput(true);
  //         } else if (finalRelatedTo === "salarySlip") {
  //           setUploadFileLabel("Please Upload Salary Slip");
  //           setDocumentType("salarySlip");
  //           setTakeInput(true);
  //         } else if (finalRelatedTo === "relievingLetter") {
  //           setUploadFileLabel("Please Upload Relieving Letter");
  //           setDocumentType("relievingLetter");
  //           setTakeInput(true);
  //         } else if (finalRelatedTo === "declarationForm") {
  //           setUploadFileLabel("Please Upload Declaration");
  //           setDocumentType("declarationForm");
  //           setTakeInput(true);
  //         }

  //         dispatch(
  //           changeProgess({ next: relatedto.replace(`"`, ``).replace(`"`, ``) })
  //         );
  //       }
  //     } else {
  //       response = res?.data?.trim() || "Something went wrong please try again";
  //     }

  //     const singleMessage = response?.split("\n");

  //     singleMessage.forEach((message: string) => {
  //       const newUserMessage: Message = {
  //         createdAt: new Date().toISOString(),
  //         sender: "assistant",
  //         text: message,
  //       };
  //       setMessages((prev) => [...prev, newUserMessage]);
  //     });
  //   } catch (error: any) {
  //     console.log("somethings went wrong = ", error);
  //     toast.error("somethings went wrong while sending messages", error);
  //   }
  // };

  const sendMessage = async (
    userMessage: string,
    type: string,
    isResumeFetched?: boolean
  ) => {
    let payload;

    if (isResumeFetched) {
      payload = {
        resume: userMessage,
        message: "Above is my resume data",
      };
    } else {
      payload = { message: userMessage };
    }

    try {
      const res = await chat({ data: payload, type }).unwrap();
      let responseText = "";
      let relatedto = null;

      // ---------------------------
      // 1. Extract main text + relatedTo
      // ---------------------------
      if (res?.data?.includes("relatedTo")) {
        const [rawMsg, relatedPart] = res.data.split("relatedTo");

        // clean main message
        responseText = rawMsg.replace("response:", "").trim();

        // retain original relatedTo logic EXACTLY
        relatedto = relatedPart?.trim();

        // ---------------------------
        // 2. Extract score if (###)
        // ---------------------------
        const regex = /\((\d+)\)/;
        const match = responseText.match(regex);

        if (match) {
          const num = Number(match[1]);
          if (!isNaN(num)) {
            setScoregenerated(num);
          }
        }

        // ---------------------------
        // 3. Your relatedTo block (unchanged)
        // ---------------------------
        if (relatedto) {
          const cleanRelatedTo = relatedto.replace(/"/g, "").trim();
          const finalRelatedTo = cleanRelatedTo.split(": ")[1];

          if (finalRelatedTo === "profilePhoto") {
            setUploadFileLabel("Please Upload Profile Photo");
            setDocumentType("profilePhoto");
            setTakeInput(true);
          } else if (finalRelatedTo === "aadhaarCard") {
            setUploadFileLabel("Please Upload Aadhar Card Photo");
            setDocumentType("aadhaarCard");
            setTakeInput(true);
          } else if (finalRelatedTo === "panCard") {
            setUploadFileLabel("Please Upload Pan Card Photo");
            setDocumentType("panCard");
            setTakeInput(true);
          } else if (finalRelatedTo === "offerLetter") {
            setUploadFileLabel("Please Upload Offer Letter");
            setDocumentType("offerLetter");
            setTakeInput(true);
          } else if (finalRelatedTo === "salarySlip") {
            setUploadFileLabel("Please Upload Salary Slip");
            setDocumentType("salarySlip");
            setTakeInput(true);
          } else if (finalRelatedTo === "relievingLetter") {
            setUploadFileLabel("Please Upload Relieving Letter");
            setDocumentType("relievingLetter");
            setTakeInput(true);
          } else if (finalRelatedTo === "declarationForm") {
            setUploadFileLabel("Please Upload Declaration");
            setDocumentType("declarationForm");
            setTakeInput(true);
          }

          dispatch(
            changeProgess({
              next: relatedto.replace(/"/g, ""),
            })
          );
        }
      } else {
        responseText =
          res?.data?.trim() || "Something went wrong please try again";
      }

      // ---------------------------
      // 4. PUSH AS ONE MESSAGE ONLY (don’t split on \n)
      // UI will handle newlines via white-space: pre-line
      // ---------------------------
      const newAssistantMsg: Message = {
        createdAt: new Date().toISOString(),
        sender: "assistant",
        text: responseText,
      };

      setMessages((prev) => [...prev, newAssistantMsg]);
    } catch (error: any) {
      console.log("error:", error);
      toast.error("Something went wrong while sending messages");
    }
  };

  const dateFormatter = (rowDate: string) => {
    const date = new Date(rowDate);
    return date.toLocaleTimeString(["en-IN"], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const uploadResume = async () => {
    if (file) {
      try {
        const res = await uploadResumecall(file).unwrap();
        toast.success("Resume uploaded successfully.");
        startChatresume();
        console.log("response from the upload resume = ", res);
      } catch (error: any) {
        toast.error("Something went wrong while Uploading resume", error);
      }
    }
  };

  // const startChatresume = () => {
  //   setChatStartedresume(true);
  //   setResumepolling(true);
  //   const repeatCall = setInterval(() => {
  //     triggerGetResumeStatus()
  //       .unwrap()
  //       .then((res) => {
  //         console.log(res);
  //         if (res?.success === true) {
  //           clearInterval(repeatCall);
  //           setResumepolling(false);
  //           // console.log("this is a response = ", res);
  //           const resumeData: Message[] = [];
  //           const startConversationwithResume: Message = {
  //             createdAt: new Date().toISOString(),
  //             sender: "assistant",
  //             text: "Data we get from your resume",
  //           };
  //           resumeData.push(startConversationwithResume);

  //           if (res?.data?.designation) {
  //             const startConversationwithResume: Message = {
  //               createdAt: new Date().toISOString(),
  //               sender: "assistant",
  //               text: `Designation : ${res?.data?.designation}`,
  //             };
  //             resumeData.push(startConversationwithResume);
  //           }

  //           if (res?.data?.experiences) {
  //             const startConversationwithResume: Message = {
  //               createdAt: new Date().toISOString(),
  //               sender: "assistant",
  //               text: `Experience Details : `,
  //             };

  //             resumeData.push(startConversationwithResume);

  //             res?.data?.experiences?.map((data: any, i: number) => {
  //               const startConversationwithResume: Message = {
  //                 createdAt: new Date().toISOString(),
  //                 sender: "assistant",
  //                 text: data?.company
  //                   ? `${i + 1} ${data?.company}, ${data?.title}, ${data?.tenure}`
  //                   : ``,
  //               };
  //               if (startConversationwithResume?.text) {
  //                 resumeData.push(startConversationwithResume);
  //               }
  //             });
  //           }

  //           if (res?.data?.educations) {
  //             const startConversationwithResume: Message = {
  //               createdAt: new Date().toISOString(),
  //               sender: "assistant",
  //               text: `Education Details : `,
  //             };

  //             resumeData.push(startConversationwithResume);

  //             res?.data?.educations?.map((data: any, i: number) => {
  //               const startConversationwithResume: Message = {
  //                 createdAt: new Date().toISOString(),
  //                 sender: "assistant",
  //                 text: data?.degree
  //                   ? `${i + 1} ${data?.degree}, ${data?.institution}, ${data?.year}`
  //                   : ``,
  //               };
  //               if (startConversationwithResume?.text) {
  //                 resumeData.push(startConversationwithResume);
  //               }
  //             });
  //           }

  //           if (res?.data?.personalInfo) {
  //             const startConversationwithResume: Message = {
  //               createdAt: new Date().toISOString(),
  //               sender: "assistant",
  //               text: `Personal Info : `,
  //             };

  //             resumeData.push(startConversationwithResume);

  //             if (res?.data?.personalInfo?.fullName) {
  //               const startConversationwithResume: Message = {
  //                 createdAt: new Date().toISOString(),
  //                 sender: "assistant",
  //                 text: `Full Name ${res?.data?.personalInfo?.fullName}`,
  //               };

  //               resumeData.push(startConversationwithResume);
  //             }

  //             if (res?.data?.personalInfo?.email) {
  //               const startConversationwithResume: Message = {
  //                 createdAt: new Date().toISOString(),
  //                 sender: "assistant",
  //                 text: `Email ${res?.data?.personalInfo?.email}`,
  //               };

  //               resumeData.push(startConversationwithResume);
  //             }

  //             if (res?.data?.personalInfo?.phone) {
  //               const startConversationwithResume: Message = {
  //                 createdAt: new Date().toISOString(),
  //                 sender: "assistant",
  //                 text: `phone ${res?.data?.personalInfo?.phone}`,
  //               };

  //               resumeData.push(startConversationwithResume);
  //             }
  //           }

  //           console.log("this is a resume data = ", resumeData);

  //           setMessages(resumeData);

  //           sendMessage(
  //             JSON.stringify(resumeData.map((msg) => msg.text)),
  //             "resume",
  //             true
  //           );
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("these is the error = ", err);
  //         if (err.status === 500) {
  //           toast.error("Something went wrong please try again");
  //           setChatStartedresume(false);
  //           clearInterval(repeatCall);
  //           setFile(null);
  //         }
  //       });
  //   }, 5000);
  // };

  const startChatresume = () => {
    setChatStartedresume(true);
    setResumepolling(true);

    const repeatCall = setInterval(() => {
      triggerGetResumeStatus()
        .unwrap()
        .then((res) => {
          console.log("this is the res", res);
          if (res?.success !== true) return;

          clearInterval(repeatCall);
          setResumepolling(false);

          const resumeData: Message[] = [];

          // Small helper to avoid repeating code 50 times
          const pushMsg = (text: string) => {
            if (!text) return;
            resumeData.push({
              createdAt: new Date().toISOString(),
              sender: "assistant",
              text,
            });
          };

          // -------------------------------------
          // START MESSAGE
          // -------------------------------------
          pushMsg("Data we get from your resume");

          // -------------------------------------
          // DESIGNATION
          // -------------------------------------
          if (res?.data?.designation) {
            pushMsg(`Designation : ${res.data.designation}`);
          }

          // -------------------------------------
          // EXPERIENCE
          // -------------------------------------
          if (res?.data?.experiences?.length) {
            pushMsg("Experience Details :");

            res.data.experiences.forEach((exp: any, i: number) => {
              if (exp?.company) {
                pushMsg(`${i + 1} ${exp.company}, ${exp.title}, ${exp.tenure}`);
              }
            });
          }

          // -------------------------------------
          // EDUCATION
          // -------------------------------------
          if (res?.data?.educations?.length) {
            pushMsg("Education Details :");

            res.data.educations.forEach((edu: any, i: number) => {
              if (edu?.degree) {
                pushMsg(
                  `${i + 1} ${edu.degree}, ${edu.institution}, ${edu.year}`
                );
              }
            });
          }

          // -------------------------------------
          // PERSONAL INFO
          // -------------------------------------
          if (res?.data?.personalInfo) {
            pushMsg("Personal Info :");

            const p = res.data.personalInfo;
            if (p.fullName) pushMsg(`Full Name: ${p.fullName}`);
            if (p.email) pushMsg(`Email: ${p.email}`);
            if (p.phone) pushMsg(`Phone: ${p.phone}`);
          }

          // -------------------------------------
          // SHOW ALL RESUME MESSAGES
          // -------------------------------------
          setMessages(resumeData);

          // -------------------------------------
          // SEND RESUME TO BOT
          // -------------------------------------
          sendMessage(
            JSON.stringify(resumeData.map((m) => m.text)),
            "resume",
            true
          );
        })
        .catch((err) => {
          console.log("these is the error = ", err);
          if (err.status === 500) {
            toast.error("Something went wrong please try again");
            setChatStartedresume(false);
            clearInterval(repeatCall);
            setFile(null);
          }
        });
    }, 5000);
  };

  const { inputAreaRef } = useTextFocusContext();

  return (
    <div className="col-span-9 bg-blue-100 rounded-4xl flex flex-col overflow-hidden relative">
      {/* Chat Area */}
      {chatStartedmanual || chatStartedresume ? (
        <div
          ref={containerRef}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#9ca3af transparent",
          }}
          className="flex-1 overflow-y-auto p-4 space-y-3"
        >
          <h2 className="text-xl border-b w-full border-white pb-1 mb-5">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="cursor-pointer"
              onClick={() => {
                setchatStartedmanual(false);
                setChatStartedresume(false);
              }}
            />{" "}
            Build Your Profile
          </h2>

          {resumePolling && (
            <div className="flex">
              <div className="flex gap-2 px-4 bg-white p-2 rounded-3xl mx-auto items-center justify-center">
                <Spinner />
                <p>We are working to get your resume details...</p>
              </div>
            </div>
          )}

          {/* Messages */}
          {messages?.map((msg, index) => {
            return (
              <div
                style={{ whiteSpace: "pre-line" }}
                key={index}
                className="flex"
              >
                <span
                  className={`max-w-2xl px-3 py-2 rounded-xl ${
                    msg.sender === "user"
                      ? "bg-(--primary-cards-color) text-white ml-auto min-w-[150px]"
                      : "bg-white text-black"
                  }`}
                >
                  {msg.text}
                  <div className="text-xs text-right">
                    {dateFormatter(msg?.createdAt)}
                    {msg.sender === "user" ? (
                      <FontAwesomeIcon className="ml-1" icon={faCheckDouble} />
                    ) : (
                      ""
                    )}
                  </div>
                </span>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex">
              {/* <Skeleton className="min-h-10 bg-white min-w-2xl rounded-lg" /> */}
              <TypingIndicator />
            </div>
          )}

          {scoreGenerated && <ScoreCard scoreGenerated={scoreGenerated} />}

          {takeInput && (
            <InputBoxCard
              addUploadMessage={addUploadMessage}
              setUploadCompleted={setUploadCompleted}
              setTakeInput={setTakeInput}
              uploadFileLabel={uploadFileLabel}
              documentType={documentType}
            />
          )}
        </div>
      ) : (
        /* Welcome Screen */
        <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col items-center">
          <Dialog>
            <h2 className="text-xl border-b w-full border-white mb-12 pb-1">
              Build Your Profile
            </h2>
            <h2 className="text-3xl mt-12">Welcome To NaukriScore.</h2>
            <p className="text-gray-600 text-center text-sm">
              Your response will affect your score. Be careful while answering.
            </p>
            <p className="text-gray-600 text-center mt-8 text-base">
              Continue:
            </p>
            {result?.isLoading ? (
              <div className="flex">
                <div className="flex gap-2 px-4 bg-white p-2 rounded-3xl mx-auto items-center justify-center">
                  <Spinner />
                  <p>Fetching Previous Chats....</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-7">
                <button
                  onClick={startChatmanually}
                  className="cursor-pointer text-base border-[#9997A0] flex items-center gap-2 border px-8 shadow-lg py-1 rounded-lg hover:scale-110 transition duration-200"
                >
                  <FontAwesomeIcon
                    className="text-[#F1D68E] w-4 h-4"
                    icon={faSquare}
                  />{" "}
                  Manually
                </button>
                {messages.length > 0 ? (
                  <button
                    onClick={() => setChatStartedresume(true)}
                    className="cursor-pointer text-base border-[#9997A0] flex items-center gap-2 border px-8 shadow-lg py-1 rounded-lg hover:scale-110 transition duration-200"
                  >
                    <FontAwesomeIcon
                      className="text-[#C9E598] w-4 h-4"
                      icon={faSquare}
                    />{" "}
                    Resume
                  </button>
                ) : (
                  <DialogTrigger className="cursor-pointer text-base border-[#9997A0] flex items-center gap-2 border px-8 shadow-lg py-1 rounded-lg hover:scale-110 transition duration-200">
                    <FontAwesomeIcon
                      className="text-[#C9E598] w-4 h-4"
                      icon={faSquare}
                    />{" "}
                    Resume
                  </DialogTrigger>
                )}
              </div>
            )}
            <DailogContent
              setFile={setFile}
              file={file}
              uploadResume={uploadResume}
            />
          </Dialog>
        </div>
      )}

      {/* Input Area */}
      {!takeInput &&
        ((chatStartedmanual && scoreGenerated === null) ||
          (chatStartedresume && scoreGenerated === null)) && (
          <div className="my-2 w-9/10 mx-auto px-4">
            <form onSubmit={formik.handleSubmit}>
              <div className="bg-white rounded-4xl px-2 flex items-center pl-4 py-1">
                <textarea
                  style={{
                    scrollbarWidth: "none",
                    scrollbarColor: "#9ca3af transparent",
                  }}
                  ref={inputAreaRef}
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.input}
                  name="input"
                  id="input"
                  rows={1}
                  className="outline-none w-full placeholder:text-gray-700 resize-none py-3"
                  placeholder="Enter the text here"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      formik.handleSubmit();
                    }
                  }}
                />

                <button className="bg-[#D9D9D9] cursor-pointer w-10 h-10 rounded-4xl flex justify-center items-center">
                  <FontAwesomeIcon className="w-4 h-4" icon={faPaperPlane} />
                </button>
              </div>
            </form>
          </div>
        )}

      <p className="text-xs text-center mb-2 text-[#9997A0]">
        Your response will affect your score. Be careful while giving your
        response.
      </p>
    </div>
  );
};
