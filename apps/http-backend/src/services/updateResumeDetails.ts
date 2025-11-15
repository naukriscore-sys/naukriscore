import prisma from "@repo/db/db";

export const updateResumeDetails = async (resumeId: string, ai: any) => {
  try {
    const resume = await prisma.resumeDetails.findFirst({
      where: {
        id: resumeId,
      },
    });

    if (!resume) {
      return false;
    }

    console.log("in the tool called updateResumeDetails");
    console.log(ai);

    // personal_details from ai data
    const { name, email, phone } = ai.data.personal_details;

    // designation from the ai response
    const designation = ai.data.designation;

    // education from ai response
    const education = ai.data.education;

    // experience from ai response
    const experiences = ai.data.experience;

    // skills from ai response
    const skills = ai.data.skills;

    // projects from ai response
    const projects = ai.data.projects;

    // socialLinks from ai response
    const socialLinks = ai.data.social_links;

    await prisma.resumeDetails.update({
      where: {
        id: resume.id,
      },
      data: {
        designation,
        personalInfo: {
          upsert: {
            create: { email, fullName: name, phone },
            update: { email, fullName: name, phone },
          },
        },
        educations: {
          deleteMany: {},
          createMany: {
            data: education,
          },
        },
        experiences: {
          deleteMany: {},
          createMany: {
            data: experiences,
          },
        },
        skills: {
          deleteMany: {},
          createMany: {
            data: skills.map((sk: string) => ({ name: sk })),
          },
        },
        projects: {
          deleteMany: {},
          createMany: {
            data: projects,
          },
        },
        socialLinks: {
          deleteMany: {},
          createMany: {
            data: socialLinks,
          },
        },
        employeeId: "ebbbf50c-684f-4529-a771-d53bf897083f",
      },
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
