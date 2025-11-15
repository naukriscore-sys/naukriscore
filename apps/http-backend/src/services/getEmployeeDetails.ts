import prisma from "@repo/db/db";

export const getEmployeeDetails = async (employeeId: string) => {
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id: employeeId,
      },
    });

    if (!employee) {
      return null;
    }
    return employee;
  } catch (error) {
    console.log(error);
    return null;
  }
};
