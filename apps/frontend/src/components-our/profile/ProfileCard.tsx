import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  User as UserIcon,
  Upload,
  Edit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileImageUpload from "./ProfileImageUpload";
import EditBasicInfoModal from "./EditBasicInfoModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLocationDot,
  faMoneyBillWave,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ScoreMeter } from "@/core";

export interface UserDetails {
  fullName: string;
  education: string;
  company: string;
  position: string;
  college: string;
  location: string;
  gender: string;
  phone: string;
  email: string;
  dob: string;
  experience: string;
  salary: string;
}

const ProfileCard = ({ data, isLoading, isSuccess }: any) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: "Kartik Sharma",
    position: "Full stack Developer",
    education: "B.Com",
    company: "Webpristine Technologies",
    college: "Delhi University",
    location: "New Delhi, India",
    gender: "Male",
    phone: "9876543210",
    email: "john.doe@example.com",
    dob: "1995-06-15",
    experience: "07 months",
    salary: "3,50,000",
  });

  useEffect(() => {
    console.log("this is a data = ", data);
    console.log("this is a data = ", data?.data?.score);
  }, [data])

  const totalScore = 780;

  return (
    <>
      <div className="rounded-3xl border-1 shadow-lg p-3 bg-white">
        <div className="grid grid-cols-12 gap-1">
          {/* Left: Profile Image */}
          <div className="col-span-3 flex flex-col items-center justify-center">
            <div
              className="w-35 h-35 rounded-full border-4 border-secondary flex items-center justify-center bg-secondary/30 cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
              onClick={() => setImageModalOpen(true)}
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <label
                  htmlFor="avatar-upload"
                  className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-dashed border-gray-300 hover:border-gray-400 transition cursor-pointer w-fit"
                >
                  {/* Avatar */}
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                    <img
                      src="/assets/avatar.png"
                      alt="Profile Avatar"
                      className="object-cover w-full h-full"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                      <Upload className="h-8 w-8 text-white" />
                    </div>
                  </div>

                </label>
              )}
            </div>
          </div>

          {/* Middle: User Details */}
          <div className="col-span-6 flex flex-col justify-center poppins">
            <div className="grid grid-cols-12">
              <div className="col-span-12 border-b-1 m-2 pb-2">
                <h2 className="text-2xl font-semibold">
                  {data?.data?.name || "N/A"}
                </h2>
                <h5 className="font-semibold text-[#494d72] text-base">
                  {userDetails.position || "N/A"}
                </h5>
                <p className="text-[#494c6a] text-xs">
                  at {userDetails.company || "N/A"}
                </p>
              </div>
              <div className="col-span-12 m-2">
                <div className="grid grid-cols-12">
                  <div className="col-span-6 border-r-1">
                    <p className="text-sm mb-1"><FontAwesomeIcon className="text-[#52545d] w-4 h-4" icon={faLocationDot} /> {userDetails.location}</p>
                    <p className="text-sm mb-1"><FontAwesomeIcon className="text-[#52545d] w-4 h-4" icon={faBriefcase} /> {userDetails.experience}</p>
                  </div>
                  <div className="col-span-6 p-2 px-4">
                    <p className="text-sm mb-1"><FontAwesomeIcon className="text-[#52545d] w-4 h-4" icon={faPhone} /> {data?.data?.number || "N/A"}</p>
                    <p className="text-sm mb-1"><FontAwesomeIcon className="text-[#52545d] w-4 h-4" icon={faEnvelope} /> {data?.data?.email || "N/A"}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0"
              onClick={() => setEditModalOpen(true)}
            >
              <Edit className="h-5 w-5" />
            </Button>

            <div>

              <p className="text-muted-foreground">{userDetails.education}</p>
            </div> */}

            {/* <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-foreground">
                <UserIcon className="h-4 w-4 text-muted-foreground" />
                <span>{userDetails.college || "Not provided"}</span>
              </div>

              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{userDetails.location || "Not provided"}</span>
              </div>

              <div className="flex items-center gap-2 text-foreground">
                <UserIcon className="h-4 w-4 text-muted-foreground" />
                <span>Gender: {userDetails.gender || "Not provided"}</span>
              </div>

              <div className="flex items-center gap-2 text-foreground">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{userDetails.phone || "Not provided"}</span>
              </div>

              <div className="flex items-center gap-2 text-foreground">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{userDetails.email || "Not provided"}</span>
              </div>

              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>DOB: {userDetails.dob || "Not provided"}</span>
              </div>
            </div> */}
          </div>

          {/* Right: Score Meter */}
          {/* <div className="flex items-center justify-center">
            <ScoreMeter score={score} />
          </div> */}

          <div className="col-span-3">
            {/* <img src="/assets/ss1.png" alt="" />
             */}
            <ScoreMeter showStats={false} value={data?.data?.score || 0} />
          </div>
        </div>
      </div>

      <ProfileImageUpload
        open={imageModalOpen}
        onOpenChange={setImageModalOpen}
        currentImage={profileImage}
        onSave={setProfileImage}
      />

      <EditBasicInfoModal
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        userDetails={userDetails}
        onSave={setUserDetails}
      />
    </>
  );
};

export default ProfileCard;
