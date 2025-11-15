export const openAiSpecFile = {
  openapi: "3.0.0",
  info: {
    title: "NaukriScore Backend",
    description: "This is all the backend",
    version: "1.0.0",
  },
  servers: [{ url: "http://localhost:5000/api/v2/employee" }],
  paths: {
    "/resume-upload": {
      post: {
        summary: "resume parser",
        description:
          "this is the endpoint where the employee will provide their resume and which will be uploaded on imagekit and also get parsed using poppler and then get structured like a resume data so that it is easy to understand what resume data we have",
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  resume: {
                    type: "string",
                    format: "binary",
                  },
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Successful",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schema/responseTemplate" },
              },
            },
          },
        },
      },
    },
    "/resume-status": {
      get: {
        summary: "resume status",
        description:
          "this is the endpoint which we will pool every 2 or some seconds which will return us the data of the resume if the status of the resume is success",
        requestParams: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  resumeId: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Successful",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schema/responseTemplate" },
              },
            },
          },
        },
      },
    },
    "/chat/:chatType": {
      post: {
        summary: "chatting with AI for building naukriscore",
        description:
          "this is the endpoint which will be used to chat with the ai and the ai here will help us building our profile and our score",
        requestParams: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  chatType: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  chatId: { type: "string", format: "uuid" },
                  message: { type: "string" },
                  resume: {
                    type: "object",
                    properties: {
                      personalInfo: {
                        type: "object",
                        properties: {
                          fullName: { type: "string" },
                          email: { type: "string" },
                          phone: { type: "string" },
                        },
                      },
                      educations: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            degree: { type: "string" },
                            institution: { type: "string" },
                            year: { type: "string" },
                          },
                        },
                      },
                      experiences: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            company: { type: "string" },
                            title: { type: "string" },
                            tenure: { type: "string" },
                          },
                        },
                      },
                      skills: { type: "array", items: { type: "string" } },
                      projects: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            name: { type: "string" },
                            description: { type: "string" },
                            liveLink: { type: "string" },
                            technologies: {
                              type: "array",
                              items: { type: "string" },
                            },
                          },
                        },
                      },
                      socialLinks: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            key: { type: "string" },
                            value: { type: "string" },
                          },
                        },
                      },
                    },
                  },
                },
                required: ["chatId", "message"],
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Successful",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schema/responseTemplate" },
              },
            },
          },
        },
      },
    },
    "/get-chats": {
      get: {
        summary: "get chats",
        description:
          "this is the endpoint that we will hit from the frontend on reload for getting the existing chats while building naukriscore and profile",
        responses: {
          "200": {
            description: "Successful",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schema/responseTemplate" },
              },
            },
          },
        },
      },
    },
  },

  components: {
    schema: {
      responseTemplate: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            description:
              "it will show true if the request succeeded else vice versa",
          },
          status: {
            type: "integer",
            description:
              "basic backend status codes for defining the request's response status",
          },
          message: {
            type: "string",
            description: "a message explaining the error",
          },
          data: {
            type: "any",
            description:
              "data which needs to be send can be anything some user's data or some token or some error etc.",
          },
        },
      },
    },
  },
};
