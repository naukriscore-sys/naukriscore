// this will be the array of severity which will help us to find the weightage of key points
type severityType = "high" | "veryLow" | "low" | "belowAverage" | "medium" | "aboveMedium" | "high" | "veryHigh" | "elite";

type statusType = "positive" | "negative";

interface feedbackParamsProps {
  [key: string]: {
    key: string
    severity: severityType;
    status: statusType;
    description: string;
    label: string;
  }
}

export const feedbackParams: feedbackParamsProps = {
  ghostingAfterOffer: {
    key: "ghostingAfterOffer",
    severity: "veryHigh",
    status: "negative",
    description: "Candidate accepts a job offer but then stops responding and doesn’t join.",
    label: "One of your employers mentioned that you accepted a job offer but later stopped responding and didn’t join, which reflects poorly on your reliability."
  },
  jobAbandonment: {
    key: "jobAbandonment",
    severity: "veryHigh",
    status: "negative",
    description: "Employee leaves the job suddenly without any notice.",
    label: "It was reported that you left a job suddenly without providing any notice, which affected the team and company operations."
  },
  notServingNoticePeriod: {
    key: "notServingNoticePeriod",
    severity: "veryHigh",
    status: "negative",
    description: "Resigning but not working through the required notice period.",
    label: "An employer stated that you resigned without completing your notice period, causing disruptions in the workflow."
  },
  insubordination: {
    key: "insubordination",
    severity: "high",
    status: "negative",
    description: "Willful refusal to obey legitimate work orders or blatant disrespect toward supervisors.",
    label: "Feedback indicated instances of refusal to follow instructions or showing disrespect to supervisors."
  },
  workplaceBullyingHarassment: {
    key: "workplaceBullyingHarassment",
    severity: "high",
    status: "negative",
    description: "Repeated rude or disrespectful behavior toward coworkers.",
    label: "Your behavior was reported as repeatedly rude or disrespectful towards colleagues."
  },
  threatsOrIntimidation: {
    key: "threatsOrIntimidation",
    severity: "high",
    status: "negative",
    description: "Saying or writing threats to hurt coworkers or the company.",
    label: "It was mentioned that you issued threats or intimidating remarks towards others at work."
  },
  unprofessionalConduct: {
    key: "unprofessionalConduct",
    severity: "medium",
    status: "negative",
    description: "Persistent unprofessional behavior at work.",
    label: "Feedback suggests consistent unprofessional behavior in the workplace."
  },
  conflictOfInterest: {
    key: "conflictOfInterest",
    severity: "high",
    status: "negative",
    description: "Doing activities or having relationships that conflict with the company’s interests without disclosure.",
    label: "There were concerns raised about a potential conflict of interest due to undisclosed activities or relationships."
  },
  moonlightingForCompetitor: {
    key: "moonlightingForCompetitor",
    severity: "high",
    status: "negative",
    description: "Taking a second job with a direct competitor without employer’s knowledge.",
    label: "It was reported that you worked for a competitor without informing your employer, which is considered unethical."
  },
  abuseOfAuthority: {
    key: "abuseOfAuthority",
    severity: "high",
    status: "negative",
    description: "Misusing one’s position or authority for personal gain or to mistreat others.",
    label: "Feedback indicated misuse of authority or position to gain unfair advantage or mistreat others."
  },
  acceptingBribesKickbacks: {
    key: "acceptingBribesKickbacks",
    severity: "veryHigh",
    status: "negative",
    description: "Soliciting or accepting bribes or kickbacks from clients/suppliers.",
    label: "You were reported for accepting or soliciting bribes, which is a severe violation of trust."
  },
  poshViolation: {
    key: "poshViolation",
    severity: "veryHigh",
    status: "negative",
    description: "Any form of sexual harassment at the workplace.",
    label: "An incident was reported under the POSH policy, which is taken very seriously."
  },
  discriminationHateSpeech: {
    key: "discriminationHateSpeech",
    severity: "veryHigh",
    status: "negative",
    description: "Demonstrating bias or using slurs against someone’s protected characteristics.",
    label: "Feedback suggests discriminatory behavior or the use of inappropriate language towards others."
  },
  workplaceViolence: {
    key: "workplaceViolence",
    severity: "veryHigh",
    status: "negative",
    description: "Any physical violence or assault at work.",
    label: "An incident of workplace violence or assault was reported involving you."
  },
  substanceAbuseOnDuty: {
    key: "substanceAbuseOnDuty",
    severity: "veryHigh",
    status: "negative",
    description: "Being intoxicated or using illegal drugs during work hours.",
    label: "You were reported to be under the influence of substances during work hours, which is strictly prohibited."
  },
  criminalConductConviction: {
    key: "criminalConductConviction",
    severity: "veryHigh",
    status: "negative",
    description: "Engaging in criminal activity or being convicted of a serious crime.",
    label: "Your record reflects involvement in serious criminal activity or conviction."
  },
  dataPrivacyViolation: {
    key: "dataPrivacyViolation",
    severity: "veryHigh",
    status: "negative",
    description: "Sharing or mishandling personal or sensitive data.",
    label: "There were reports of mishandling or leaking sensitive company or client data."
  },
  insiderTradingInsiderDataMisuse: {
    key: "insiderTradingInsiderDataMisuse",
    severity: "veryHigh",
    status: "negative",
    description: "Using inside company information for unfair gain.",
    label: "You were reported for misusing confidential company information for personal gain."
  },
  regulatoryComplianceBreach: {
    key: "regulatoryComplianceBreach",
    severity: "veryHigh",
    status: "negative",
    description: "Breaking laws or rules the company must follow.",
    label: "Feedback indicates a breach of regulatory compliance, which could harm the company legally."
  },
  poorPerformanceIncompetence: {
    key: "poorPerformanceIncompetence",
    severity: "medium",
    status: "negative",
    description: "Not doing the job well or lacking needed skills.",
    label: "It was reported that your performance did not meet the required standards."
  },
  grossNegligence: {
    key: "grossNegligence",
    severity: "veryHigh",
    status: "negative",
    description: "Careless actions that cause serious problems.",
    label: "Feedback indicates that your actions were careless and caused serious issues."
  },
  attendanceIssues: {
    key: "attendanceIssues",
    severity: "medium",
    status: "negative",
    description: "Often being absent or late to work.",
    label: "There are consistent reports of tardiness or frequent absences from work."
  },
  financialFraudEmbezzlement: {
    key: "financialFraudEmbezzlement",
    severity: "veryHigh",
    status: "negative",
    description: "Stealing company money or misusing funds.",
    label: "You were reported for financial fraud or embezzling company funds."
  },
  theftCompanyPropertyOrData: {
    key: "theftCompanyPropertyOrData",
    severity: "veryHigh",
    status: "negative",
    description: "Stealing company property or confidential data.",
    label: "Feedback indicates theft of company property or sensitive information."
  },
  expenseFraud: {
    key: "expenseFraud",
    severity: "veryHigh",
    status: "negative",
    description: "Making false expense claims for money.",
    label: "It was reported that you submitted false expense claims for financial gain."
  },
  timesheetFraud: {
    key: "timesheetFraud",
    severity: "high",
    status: "negative",
    description: "Lying about work hours to get paid more.",
    label: "There were concerns that you reported incorrect work hours to receive extra pay."
  },
  fakeDocumentation: {
    key: "fakeDocumentation",
    severity: "veryHigh",
    status: "negative",
    description: "Using fake documents for personal benefit.",
    label: "Feedback suggests the use of fake documentation for personal advantage."
  },
  forgedDocumentsOnTheJob: {
    key: "forgedDocumentsOnTheJob",
    severity: "veryHigh",
    status: "negative",
    description: "Creating or using fake documents at work.",
    label: "An employer reported that you created or used forged documents in the workplace."
  },
  identityImpersonationFraud: {
    key: "identityImpersonationFraud",
    severity: "veryHigh",
    status: "negative",
    description: "Pretending to be someone else for fraud.",
    label: "You were reported for impersonating someone else to commit fraud."
  },
  sabotageMaliciousDamage: {
    key: "sabotageMaliciousDamage",
    severity: "veryHigh",
    status: "negative",
    description: "Damaging company property on purpose.",
    label: "There were reports of intentional damage to company property."
  },
  itSecurityPolicyViolation: {
    key: "itSecurityPolicyViolation",
    severity: "high",
    status: "negative",
    description: "Breaking IT security rules or company policies.",
    label: "You were reported for violating IT security policies."
  },
  socialMediaMisconduct: {
    key: "socialMediaMisconduct",
    severity: "high",
    status: "negative",
    description: "Posting harmful or inappropriate content online about company.",
    label: "An employer reported inappropriate or harmful posts about the company on social media."
  },
  misuseOfCompanyResources: {
    key: "misuseOfCompanyResources",
    severity: "high",
    status: "negative",
    description: "Using company tools or assets for personal gain.",
    label: "Feedback suggests that you misused company resources for personal benefit."
  },
  repeatedDisciplinaryInfractions: {
    key: "repeatedDisciplinaryInfractions",
    severity: "high",
    status: "negative",
    description: "Breaking rules repeatedly after warnings.",
    label: "There were multiple instances of rule-breaking even after being warned."
  },
  poorGigWorkerRating: {
    key: "poorGigWorkerRating",
    severity: "medium",
    status: "negative",
    description: "Getting low ratings from clients or customers.",
    label: "You received consistently low ratings from clients or customers."
  },
  highCancellationNoShowRate: {
    key: "highCancellationNoShowRate",
    severity: "medium",
    status: "negative",
    description: "Canceling jobs or not showing up too often.",
    label: "Feedback shows that you frequently canceled or missed scheduled jobs."
  },
  platformPolicyViolations: {
    key: "platformPolicyViolations",
    severity: "medium",
    status: "negative",
    description: "Breaking rules of the gig platform.",
    label: "You were reported for violating the rules of the platform you were working on."
  },
  fraudulentActivitiesInGigs: {
    key: "fraudulentActivitiesInGigs",
    severity: "high",
    status: "negative",
    description: "Cheating or doing fraud in gig work.",
    label: "There were reports of fraudulent activities while performing gig-related work."
  },
  unsafePracticesGigFieldWork: {
    key: "unsafePracticesGigFieldWork",
    severity: "high",
    status: "negative",
    description: "Working in unsafe ways that risk harm.",
    label: "Feedback indicates unsafe practices while performing field-related gig work."
  },
  lossOfLicenseCertification: {
    key: "lossOfLicenseCertification",
    severity: "high",
    status: "negative",
    description: "Losing required license or certification for job.",
    label: "It was reported that you lost a mandatory license or certification required for your role."
  },
  nepotismFavoritism: {
    key: "nepotismFavoritism",
    severity: "medium",
    status: "negative",
    description: "Giving unfair advantage to friends or family.",
    label: "Feedback suggests favoritism or nepotism in decision-making or opportunities."
  },
  offDutyMisconduct: {
    key: "offDutyMisconduct",
    severity: "medium",
    status: "negative",
    description: "Bad behavior outside work that hurts company image.",
    label: "Your behavior outside work was reported to have negatively impacted the company’s reputation."
  },
  sleepingOnTheJob: {
    key: "sleepingOnTheJob",
    severity: "low",
    status: "negative",
    description: "Sleeping during work hours.",
    label: "You were observed sleeping during work hours, which affected productivity."
  },
  plagiarismIntellectualPropertyTheft: {
    key: "plagiarismIntellectualPropertyTheft",
    severity: "high",
    status: "negative",
    description: "Copying others’ work or stealing ideas.",
    label: "It was reported that you copied others' work or used ideas without permission."
  },
  retaliationAgainstComplainants: {
    key: "retaliationAgainstComplainants",
    severity: "high",
    status: "negative",
    description: "Punishing or mistreating those who complained.",
    label: "Feedback indicates retaliation against individuals who raised concerns or complaints."
  },
  illicitBehaviorOnPremises: {
    key: "illicitBehaviorOnPremises",
    severity: "high",
    status: "negative",
    description: "Doing illegal or inappropriate acts at workplace.",
    label: "There were reports of illegal or inappropriate behavior within the workplace."
  },
  teamworkLackOfCollaboration: {
    key: "teamworkLackOfCollaboration",
    severity: "medium",
    status: "negative",
    description: "Not working well with team members or resisting collaboration.",
    label: "It was observed that you often struggled to collaborate effectively with your team, impacting group productivity."
  },
  communicationIssues: {
    key: "communicationIssues",
    severity: "medium",
    status: "negative",
    description: "Poor communication or failure to share important information.",
    label: "Feedback indicated gaps in communication, leading to misunderstandings and inefficiencies."
  },
  dishonestyOrMisrepresentation: {
    key: "dishonestyOrMisrepresentation",
    severity: "high",
    status: "negative",
    description: "Lying, falsifying records, or misrepresenting facts.",
    label: "You were reported for dishonesty or misrepresentation, which damages trust within the organization."
  },
  timeTheft: {
    key: "timeTheft",
    severity: "medium",
    status: "negative",
    description: "Misusing work hours for personal tasks without approval.",
    label: "It was noted that work hours were often spent on personal activities, reducing productivity."
  },
  unauthorizedLeave: {
    key: "unauthorizedLeave",
    severity: "medium",
    status: "negative",
    description: "Taking leave without proper approval or notice.",
    label: "You took leave without informing or getting approval, causing inconvenience to your team."
  },
  failureToMeetDeadlines: {
    key: "failureToMeetDeadlines",
    severity: "medium",
    status: "negative",
    description: "Consistently missing project deadlines or deliverables.",
    label: "Feedback indicates repeated delays in meeting deadlines, affecting team performance."
  },
  resistingFeedback: {
    key: "resistingFeedback",
    severity: "low",
    status: "negative",
    description: "Refusing to accept constructive criticism or guidance.",
    label: "It was reported that you were resistant to feedback, hindering growth and improvement."
  },
  negativeAttitude: {
    key: "negativeAttitude",
    severity: "low",
    status: "negative",
    description: "Displaying a consistently negative or pessimistic outlook at work.",
    label: "Your attitude was perceived as overly negative, affecting workplace morale."
  },
  gossipingOrRumorSpreading: {
    key: "gossipingOrRumorSpreading",
    severity: "low",
    status: "negative",
    description: "Engaging in workplace gossip or spreading rumors.",
    label: "You were reported for spreading gossip, which created tension among colleagues."
  },
  ignoringCompanyPolicies: {
    key: "ignoringCompanyPolicies",
    severity: "medium",
    status: "negative",
    description: "Frequently disregarding established company policies or rules.",
    label: "It was observed that you often ignored company policies, leading to compliance issues."
  },
  securityProtocolViolation: {
    key: "securityProtocolViolation",
    severity: "high",
    status: "negative",
    description: "Failure to follow critical security protocols, risking company data.",
    label: "You were reported for violating security protocols, putting sensitive information at risk."
  },
  unauthorizedAccess: {
    key: "unauthorizedAccess",
    severity: "high",
    status: "negative",
    description: "Accessing systems, files, or areas without proper authorization.",
    label: "Feedback indicates you accessed restricted systems or data without permission."
  },
  misuseOfCompanyProperty: {
    key: "misuseOfCompanyProperty",
    severity: "medium",
    status: "negative",
    description: "Improper use of company resources for personal purposes.",
    label: "It was reported that company assets were used for personal gain without authorization."
  },
  failureToDocumentWork: {
    key: "failureToDocumentWork",
    severity: "low",
    status: "negative",
    description: "Not maintaining required documentation or records of work.",
    label: "There were reports of incomplete documentation, creating difficulties for the team."
  },
  unreliableWorkQuality: {
    key: "unreliableWorkQuality",
    severity: "medium",
    status: "negative",
    description: "Work quality is inconsistent and requires frequent corrections.",
    label: "Your output was reported as inconsistent, often requiring extra effort to correct."
  },
  lackOfInitiative: {
    key: "lackOfInitiative",
    severity: "low",
    status: "negative",
    description: "Failing to take initiative or ownership of tasks.",
    label: "Feedback suggests a lack of initiative in taking ownership of projects or responsibilities."
  },
  customerComplaint: {
    key: "customerComplaint",
    severity: "high",
    status: "negative",
    description: "Receiving formal complaints from clients or customers.",
    label: "A client or customer formally complained about your behavior or performance."
  },
  missedSalesTargets: {
    key: "missedSalesTargets",
    severity: "medium",
    status: "negative",
    description: "Consistently failing to meet assigned sales or performance targets.",
    label: "You were reported for regularly missing assigned sales or performance goals."
  },
  miscommunicationWithClients: {
    key: "miscommunicationWithClients",
    severity: "medium",
    status: "negative",
    description: "Providing incorrect or unclear information to clients.",
    label: "Feedback indicated instances where unclear communication caused client dissatisfaction."
  },
  breachOfConfidentiality: {
    key: "breachOfConfidentiality",
    severity: "veryHigh",
    status: "negative",
    description: "Revealing confidential company or client information.",
    label: "You were reported for sharing confidential information without proper authorization."
  },
  favoritismOrNepotism: {
    key: "favoritismOrNepotism",
    severity: "medium",
    status: "negative",
    description: "Showing unfair favoritism toward certain individuals.",
    label: "There were concerns about favoritism or biased treatment of team members."
  },
  lackOfAccountability: {
    key: "lackOfAccountability",
    severity: "medium",
    status: "negative",
    description: "Avoiding responsibility or blaming others for mistakes.",
    label: "Feedback suggests a pattern of avoiding accountability for your actions."
  },
  hostileWorkEnvironmentCreation: {
    key: "hostileWorkEnvironmentCreation",
    severity: "high",
    status: "negative",
    description: "Contributing to a toxic or hostile workplace atmosphere.",
    label: "It was reported that your behavior contributed to a negative work environment."
  },
  failureToFollowSafetyRules: {
    key: "failureToFollowSafetyRules",
    severity: "high",
    status: "negative",
    description: "Not following workplace health and safety rules.",
    label: "There were concerns about your failure to follow essential safety procedures."
  },
  unethicalSalesPractices: {
    key: "unethicalSalesPractices",
    severity: "high",
    status: "negative",
    description: "Engaging in manipulative or deceptive sales tactics.",
    label: "Feedback indicated the use of unethical practices to achieve sales goals."
  },
  overPromisingToClients: {
    key: "overPromisingToClients",
    severity: "medium",
    status: "negative",
    description: "Making unrealistic promises to clients that cannot be fulfilled.",
    label: "You were reported for making commitments to clients that couldn’t be delivered."
  },
  failureToSupportTeam: {
    key: "failureToSupportTeam",
    severity: "low",
    status: "negative",
    description: "Not providing support or help to teammates when needed.",
    label: "It was noted that you did not actively support your team when assistance was required."
  },
  conflictAvoidance: {
    key: "conflictAvoidance",
    severity: "low",
    status: "negative",
    description: "Avoiding necessary discussions to resolve conflicts.",
    label: "You were reported for avoiding necessary conflict resolution conversations."
  },
  frequentComplaintsFromPeers: {
    key: "frequentComplaintsFromPeers",
    severity: "medium",
    status: "negative",
    description: "Colleagues frequently raise concerns about your behavior or performance.",
    label: "Multiple peers expressed dissatisfaction with your behavior or work practices."
  },
  projectAbandonment: {
    key: "projectAbandonment",
    severity: "high",
    status: "negative",
    description: "Leaving projects incomplete without explanation or handover.",
    label: "Feedback suggests you abandoned projects without proper transition planning."
  },
  failureToAdaptToChange: {
    key: "failureToAdaptToChange",
    severity: "low",
    status: "negative",
    description: "Struggling to adjust to new processes or technologies.",
    label: "You were reported for resistance to adapting to changes in processes or tools."
  },
  carelessnessWithEquipment: {
    key: "carelessnessWithEquipment",
    severity: "low",
    status: "negative",
    description: "Improper handling of tools, machines, or equipment.",
    label: "There were reports of mishandling company equipment or resources."
  },
  dataEntryErrors: {
    key: "dataEntryErrors",
    severity: "low",
    status: "negative",
    description: "Frequent mistakes while entering or maintaining data.",
    label: "Feedback highlighted repeated errors in data entry tasks."
  },
  resistingTeamDecisions: {
    key: "resistingTeamDecisions",
    severity: "medium",
    status: "negative",
    description: "Refusing to align with team decisions or directions.",
    label: "It was reported that you resisted collective team decisions, slowing progress."
  },
  misuseOfCompanyEmail: {
    key: "misuseOfCompanyEmail",
    severity: "low",
    status: "negative",
    description: "Sending inappropriate or unauthorized emails through company systems.",
    label: "You were reported for using company email for unauthorized or personal matters."
  },
  lateSubmissionOfReports: {
    key: "lateSubmissionOfReports",
    severity: "low",
    status: "negative",
    description: "Frequently submitting reports after deadlines.",
    label: "Reports or documentation were regularly delayed, impacting workflow."
  },
  lackOfProfessionalGrowth: {
    key: "lackOfProfessionalGrowth",
    severity: "low",
    status: "negative",
    description: "Showing little effort to develop skills or grow professionally.",
    label: "Feedback indicates minimal effort toward professional development."
  },
  failureToRespectDiversity: {
    key: "failureToRespectDiversity",
    severity: "medium",
    status: "negative",
    description: "Not respecting diverse cultures, backgrounds, or perspectives.",
    label: "It was reported that you did not demonstrate respect for diversity in the workplace."
  },
  abandoningClientMeetings: {
    key: "abandoningClientMeetings",
    severity: "high",
    status: "negative",
    description: "Missing client meetings without prior notice or valid reason.",
    label: "Feedback suggests repeated absence from important client meetings without communication."
  },
  inappropriateLanguageUse: {
    key: "inappropriateLanguageUse",
    severity: "medium",
    status: "negative",
    description: "Using offensive or unprofessional language at work.",
    label: "You were reported for using inappropriate language in professional settings."
  },
  failureToMentorJuniors: {
    key: "failureToMentorJuniors",
    severity: "low",
    status: "negative",
    description: "Not providing expected guidance or mentorship to junior employees.",
    label: "There were concerns about lack of mentorship or guidance for junior staff members."
  },
  overDependenceOnSupervision: {
    key: "overDependenceOnSupervision",
    severity: "low",
    status: "negative",
    description: "Needing constant supervision to complete tasks.",
    label: "Feedback indicates over-reliance on supervisors for task completion."
  },
  poorConflictResolution: {
    key: "poorConflictResolution",
    severity: "medium",
    status: "negative",
    description: "Handling conflicts poorly or escalating issues unnecessarily.",
    label: "You were reported for ineffective conflict resolution, leading to workplace friction."
  },
  failureToMaintainCleanWorkspace: {
    key: "failureToMaintainCleanWorkspace",
    severity: "low",
    status: "negative",
    description: "Neglecting to maintain a clean or organized workspace.",
    label: "Your workspace was repeatedly noted as unclean or disorganized."
  },
  passiveAggressiveBehavior: {
    key: "passiveAggressiveBehavior",
    severity: "medium",
    status: "negative",
    description: "Displaying indirect resistance or hostility instead of addressing issues openly.",
    label: "Feedback suggests a pattern of passive-aggressive behavior affecting team morale."
  },
  publicCriticismOfTeam: {
    key: "publicCriticismOfTeam",
    severity: "medium",
    status: "negative",
    description: "Criticizing team members publicly instead of providing constructive feedback privately.",
    label: "It was reported that you criticized colleagues publicly, causing discomfort."
  },
  failureToPrioritizeTasks: {
    key: "failureToPrioritizeTasks",
    severity: "medium",
    status: "negative",
    description: "Consistently failing to prioritize work effectively.",
    label: "You were reported for struggling to manage priorities, leading to missed deadlines."
  },
  failureToUpdateSkills: {
    key: "failureToUpdateSkills",
    severity: "low",
    status: "negative",
    description: "Not staying up-to-date with necessary skills or industry knowledge.",
    label: "It was reported that you did not actively update your skills, leading to outdated practices."
  },
  ignoringManagerInstructions: {
    key: "ignoringManagerInstructions",
    severity: "medium",
    status: "negative",
    description: "Failing to follow direct instructions from a manager or supervisor.",
    label: "Feedback indicated instances where you ignored clear instructions from management."
  },
  failureToMeetKPIs: {
    key: "failureToMeetKPIs",
    severity: "medium",
    status: "negative",
    description: "Consistently failing to meet defined key performance indicators.",
    label: "You were reported for repeatedly missing agreed performance metrics or KPIs."
  },
  lackOfTransparency: {
    key: "lackOfTransparency",
    severity: "medium",
    status: "negative",
    description: "Withholding important information or not being open in communication.",
    label: "There were concerns about a lack of transparency in your communication."
  },
  inefficientWorkMethods: {
    key: "inefficientWorkMethods",
    severity: "low",
    status: "negative",
    description: "Using outdated or inefficient methods, slowing down productivity.",
    label: "Feedback suggests that you often used inefficient work methods that delayed progress."
  },
  lowProductivity: {
    key: "lowProductivity",
    severity: "medium",
    status: "negative",
    description: "Producing significantly less work output than expected.",
    label: "It was reported that your overall productivity was consistently below expectations."
  },
  poorTimeManagement: {
    key: "poorTimeManagement",
    severity: "medium",
    status: "negative",
    description: "Inability to manage time effectively, leading to delays and missed deadlines.",
    label: "Feedback highlighted recurring issues with time management impacting project timelines."
  },
  failureToReportIssues: {
    key: "failureToReportIssues",
    severity: "low",
    status: "negative",
    description: "Not reporting known issues or risks to management in time.",
    label: "You were reported for failing to escalate important issues on time, causing preventable problems."
  },
  unnecessaryWorkplaceConflicts: {
    key: "unnecessaryWorkplaceConflicts",
    severity: "medium",
    status: "negative",
    description: "Starting unnecessary arguments or conflicts with colleagues.",
    label: "Feedback suggests you were involved in creating avoidable conflicts at work."
  },
  overRelianceOnOthers: {
    key: "overRelianceOnOthers",
    severity: "low",
    status: "negative",
    description: "Frequently depending on others to complete basic tasks.",
    label: "It was reported that you relied too heavily on teammates for tasks you could manage independently."
  },
  ignoringClientFeedback: {
    key: "ignoringClientFeedback",
    severity: "medium",
    status: "negative",
    description: "Failing to take client feedback seriously or address their concerns.",
    label: "Feedback indicated that you did not adequately respond to client concerns or suggestions."
  },
  failureToDocumentProcesses: {
    key: "failureToDocumentProcesses",
    severity: "low",
    status: "negative",
    description: "Not documenting key processes for future reference.",
    label: "You were reported for not maintaining proper process documentation, affecting team continuity."
  },
  wastingCompanyResources: {
    key: "wastingCompanyResources",
    severity: "low",
    status: "negative",
    description: "Careless or unnecessary use of company resources.",
    label: "It was reported that company resources were wasted due to lack of careful usage."
  },
  inappropriateSocialMediaActivity: {
    key: "inappropriateSocialMediaActivity",
    severity: "medium",
    status: "negative",
    description: "Posting inappropriate content or comments about the company online.",
    label: "Feedback suggests inappropriate or unprofessional posts were made on social media about the company."
  },
  refusalToWorkOvertimeWhenRequired: {
    key: "refusalToWorkOvertimeWhenRequired",
    severity: "low",
    status: "negative",
    description: "Declining to work reasonable overtime when urgently needed by the team.",
    label: "It was reported that you declined to support the team during critical periods requiring overtime."
  },
  disrespectingCulturalNorms: {
    key: "disrespectingCulturalNorms",
    severity: "medium",
    status: "negative",
    description: "Showing insensitivity or disrespect to cultural norms in the workplace.",
    label: "Feedback indicates insensitivity to cultural differences among colleagues or clients."
  },
  failureToSupportCompanyValues: {
    key: "failureToSupportCompanyValues",
    severity: "medium",
    status: "negative",
    description: "Not demonstrating commitment to company mission or values.",
    label: "It was noted that your actions often did not align with company values and mission."
  },
  avoidingResponsibilityForMistakes: {
    key: "avoidingResponsibilityForMistakes",
    severity: "medium",
    status: "negative",
    description: "Not owning up to mistakes or attempting to shift blame.",
    label: "You were reported for avoiding responsibility and placing blame on others."
  },
  failureToMaintainProfessionalBoundaries: {
    key: "failureToMaintainProfessionalBoundaries",
    severity: "medium",
    status: "negative",
    description: "Blurring personal and professional boundaries inappropriately.",
    label: "Feedback indicates you struggled to maintain appropriate professional boundaries."
  },
  lowEngagement: {
    key: "lowEngagement",
    severity: "low",
    status: "negative",
    description: "Showing little interest or involvement in team or company initiatives.",
    label: "It was reported that you showed limited enthusiasm or participation in company activities."
  },
  failureToFollowUp: {
    key: "failureToFollowUp",
    severity: "low",
    status: "negative",
    description: "Not following up on tasks or communications as required.",
    label: "Feedback indicated frequent lapses in following up on pending tasks or communications."
  },
  negativeInfluenceOnPeers: {
    key: "negativeInfluenceOnPeers",
    severity: "medium",
    status: "negative",
    description: "Negatively influencing peers with unproductive behaviors or attitudes.",
    label: "Your behavior was reported to have a negative influence on peers or team culture."
  },
  failureToEscalateCriticalIssues: {
    key: "failureToEscalateCriticalIssues",
    severity: "high",
    status: "negative",
    description: "Not escalating urgent or critical issues to leadership.",
    label: "It was reported that urgent issues were not escalated in time, leading to significant problems."
  },
  disregardForDeadlines: {
    key: "disregardForDeadlines",
    severity: "medium",
    status: "negative",
    description: "Consistently missing deadlines without valid reasons.",
    label: "Feedback highlights repeated disregard for set deadlines."
  },
  failureToMeetClientExpectations: {
    key: "failureToMeetClientExpectations",
    severity: "medium",
    status: "negative",
    description: "Delivering work that does not meet client requirements or expectations.",
    label: "It was reported that deliverables often fell short of client expectations."
  },
  ineffectiveDelegation: {
    key: "ineffectiveDelegation",
    severity: "low",
    status: "negative",
    description: "Not delegating tasks effectively, leading to inefficiencies.",
    label: "Feedback suggests poor delegation practices, causing delays or confusion."
  },
  overPromisingInternally: {
    key: "overPromisingInternally",
    severity: "medium",
    status: "negative",
    description: "Making commitments to colleagues that are not fulfilled.",
    label: "You were reported for overpromising internally and failing to deliver."
  },
  disrespectingHierarchy: {
    key: "disrespectingHierarchy",
    severity: "medium",
    status: "negative",
    description: "Failing to respect organizational hierarchy and reporting lines.",
    label: "Feedback indicated a lack of respect for reporting structures or management."
  },
  failureToHandleConfidentialDataSecurely: {
    key: "failureToHandleConfidentialDataSecurely",
    severity: "veryHigh",
    status: "negative",
    description: "Mishandling or exposing confidential data due to negligence.",
    label: "It was reported that confidential data was mishandled, posing significant risks."
  },
  overDependenceOnTechnology: {
    key: "overDependenceOnTechnology",
    severity: "low",
    status: "negative",
    description: "Relying too heavily on technology without manual checks or verification.",
    label: "Feedback indicated excessive reliance on tools without proper verification, causing errors."
  },
  failureToMeetTrainingRequirements: {
    key: "failureToMeetTrainingRequirements",
    severity: "low",
    status: "negative",
    description: "Not completing required training or certifications on time.",
    label: "You were reported for failing to complete mandatory training programs."
  },
  inconsistentAttendance: {
    key: "inconsistentAttendance",
    severity: "medium",
    status: "negative",
    description: "Irregular attendance affecting work consistency and reliability.",
    label: "Feedback indicates inconsistent attendance patterns affecting team stability."
  },
  failureToLeadEffectively: {
    key: "failureToLeadEffectively",
    severity: "high",
    status: "negative",
    description: "Poor leadership performance, failing to guide or support team members.",
    label: "You were reported for ineffective leadership that hindered team performance."
  },
  lackOfProblemSolvingSkills: {
    key: "lackOfProblemSolvingSkills",
    severity: "medium",
    status: "negative",
    description: "Struggling to analyze and resolve work-related problems.",
    label: "Feedback suggests difficulty in identifying and solving critical problems."
  },
  failureToFollowEthicalStandards: {
    key: "failureToFollowEthicalStandards",
    severity: "high",
    status: "negative",
    description: "Engaging in actions that violate ethical guidelines.",
    label: "It was reported that certain actions violated ethical standards of the company."
  },
  lowTeamMoraleContribution: {
    key: "lowTeamMoraleContribution",
    severity: "low",
    status: "negative",
    description: "Failing to contribute positively to team morale.",
    label: "Feedback indicated a lack of contribution to maintaining team morale."
  },
  failureToManageStress: {
    key: "failureToManageStress",
    severity: "low",
    status: "negative",
    description: "Not handling work-related stress effectively, impacting performance.",
    label: "You were reported for difficulty in managing stress, affecting your work output."
  },
  unwillingnessToLearn: {
    key: "unwillingnessToLearn",
    severity: "low",
    status: "negative",
    description: "Refusing to learn new skills or adapt to changes.",
    label: "Feedback suggests resistance to learning and personal growth."
  },
  lackOfAttentionToDetail: {
    key: "lackOfAttentionToDetail",
    severity: "medium",
    status: "negative",
    description: "Frequently overlooking important details, leading to mistakes.",
    label: "It was reported that frequent mistakes occurred due to lack of attention to detail."
  },
  failureToMaintainWorkLifeBalance: {
    key: "failureToMaintainWorkLifeBalance",
    severity: "low",
    status: "negative",
    description: "Allowing poor work-life balance to affect work performance.",
    label: "Feedback indicated that work-life imbalance negatively impacted your productivity."
  },
  ignoringTeamFeedback: {
    key: "ignoringTeamFeedback",
    severity: "medium",
    status: "negative",
    description: "Not taking team feedback into consideration during decision-making.",
    label: "You were reported for dismissing constructive team feedback."
  },
  failureToImprovePerformanceAfterWarnings: {
    key: "failureToImprovePerformanceAfterWarnings",
    severity: "high",
    status: "negative",
    description: "Ignoring repeated performance warnings without improvement.",
    label: "Feedback indicated no improvement despite multiple performance warnings."
  },
  failureToManageRemoteWorkEffectively: {
    key: "failureToManageRemoteWorkEffectively",
    severity: "medium",
    status: "negative",
    description: "Struggling to maintain productivity while working remotely.",
    label: "It was reported that remote work performance did not meet expectations."
  },
  failureToComplyWithLegalRequirements: {
    key: "failureToComplyWithLegalRequirements",
    severity: "veryHigh",
    status: "negative",
    description: "Not adhering to legal requirements relevant to the role or industry.",
    label: "Feedback highlighted non-compliance with legal or regulatory obligations."
  },
  ignoringClientDeadlines: {
    key: "ignoringClientDeadlines",
    severity: "medium",
    status: "negative",
    description: "Missing client deadlines, affecting relationships and trust.",
    label: "You were reported for failing to meet critical client deadlines."
  },
  failureToMaintainTeamHarmony: {
    key: "failureToMaintainTeamHarmony",
    severity: "medium",
    status: "negative",
    description: "Not taking steps to resolve team disputes or maintain harmony.",
    label: "Feedback indicated insufficient effort in maintaining a harmonious team environment."
  },
  unprofessionalPublicBehavior: {
    key: "unprofessionalPublicBehavior",
    severity: "medium",
    status: "negative",
    description: "Acting unprofessionally outside the workplace, affecting company reputation.",
    label: "It was reported that public behavior negatively impacted the company’s image."
  },
  failureToSupportInnovation: {
    key: "failureToSupportInnovation",
    severity: "low",
    status: "negative",
    description: "Not encouraging or participating in innovation initiatives.",
    label: "Feedback suggests a lack of contribution toward innovation and improvement efforts."
  },
  perfectAttendancePunctuality: {
    key: "perfectAttendancePunctuality",
    severity: "veryLow",
    status: "positive",
    description: "Always on time and present at work.",
    label: "You consistently maintained perfect attendance and punctuality."
  },
  languagesKnown: {
    key: "languagesKnown",
    severity: "veryLow",
    status: "positive",
    description: "Languages candidate can speak or write.",
    label: "You are proficient in multiple languages, which adds value to communication."
  },
  internationalEducationExposure: {
    key: "internationalEducationExposure",
    severity: "veryLow",
    status: "positive",
    description: "Education experience in another country.",
    label: "Your international education exposure reflects diverse learning experiences."
  },
  minorOnlineCoursesCompleted: {
    key: "minorOnlineCoursesCompleted",
    severity: "veryLow",
    status: "positive",
    description: "Completed minor online learning courses.",
    label: "You have completed minor online courses, showing dedication to continuous learning."
  },
  basicTechnicalToolsMastery: {
    key: "basicTechnicalToolsMastery",
    severity: "veryLow",
    status: "positive",
    description: "Has basic knowledge of technical tools.",
    label: "You possess essential technical tool knowledge required for the role."
  },
  employeeOfTheMonthQuarter: {
    key: "employeeOfTheMonthQuarter",
    severity: "low",
    status: "positive",
    description: "Recognized as the best employee in a specific period.",
    label: "You were recognized as the employee of the month or quarter for exceptional performance."
  },
  spotAwardForExtraEffort: {
    key: "spotAwardForExtraEffort",
    severity: "low",
    status: "positive",
    description: "Rewarded for going above and beyond in a task.",
    label: "You received a spot award for putting in extra effort beyond expectations."
  },
  advancedTrainingCompleted: {
    key: "advancedTrainingCompleted",
    severity: "low",
    status: "positive",
    description: "Completed advanced training successfully.",
    label: "You successfully completed advanced training programs to enhance your skills."
  },
  mentorshipProvided: {
    key: "mentorshipProvided",
    severity: "low",
    status: "positive",
    description: "Provided guidance or helped others learn.",
    label: "You contributed to the growth of others by providing mentorship and guidance."
  },
  minorCertificationsCount: {
    key: "minorCertificationsCount",
    severity: "low",
    status: "positive",
    description: "Completed small but relevant certifications.",
    label: "You have completed relevant minor certifications to strengthen your profile."
  },
  extracurricularActivities: {
    key: "extracurricularActivities",
    severity: "low",
    status: "positive",
    description: "Participated in extracurricular activities.",
    label: "You actively participated in extracurricular activities, showcasing versatility."
  },
  volunteeringWork: {
    key: "volunteeringWork",
    severity: "low",
    status: "positive",
    description: "Participated in volunteering activities.",
    label: "You engaged in volunteering work, reflecting social responsibility."
  },
  teamPlayerAward: {
    key: "teamPlayerAward",
    severity: "belowAverage",
    status: "positive",
    description: "Helped teammates and collaborated effectively.",
    label: "You were recognized as a valuable team player for your collaborative efforts."
  },
  communicationExcellence: {
    key: "communicationExcellence",
    severity: "belowAverage",
    status: "positive",
    description: "Spoke and wrote clearly and effectively.",
    label: "You demonstrated excellent communication skills, both verbal and written."
  },
  conflictResolutionExcellence: {
    key: "conflictResolutionExcellence",
    severity: "belowAverage",
    status: "positive",
    description: "Resolved conflicts positively and productively.",
    label: "You showed strong conflict resolution abilities by resolving disputes effectively."
  },
  highCustomerSatisfactionScores: {
    key: "highCustomerSatisfactionScores",
    severity: "belowAverage",
    status: "positive",
    description: "Received very positive feedback from customers.",
    label: "Your work has consistently earned high customer satisfaction ratings."
  },
  peerAppreciationNomination: {
    key: "peerAppreciationNomination",
    severity: "belowAverage",
    status: "positive",
    description: "Nominated by peers for good work.",
    label: "Your peers nominated you for your exceptional contributions and teamwork."
  },
  teamChoiceAward: {
    key: "teamChoiceAward",
    severity: "belowAverage",
    status: "positive",
    description: "Chosen by the team as the best contributor.",
    label: "Your team selected you as the most valuable contributor."
  },
  publicSpeaking: {
    key: "publicSpeaking",
    severity: "belowAverage",
    status: "positive",
    description: "Demonstrated strong public speaking skills.",
    label: "You exhibited strong public speaking and presentation abilities."
  },
  eventOrganization: {
    key: "eventOrganization",
    severity: "belowAverage",
    status: "positive",
    description: "Organized company or public events effectively.",
    label: "You successfully organized impactful company or public events."
  },
  exceededPerformanceTargets: {
    key: "exceededPerformanceTargets",
    severity: "medium",
    status: "positive",
    description: "Achieved more than expected goals.",
    label: "You consistently exceeded performance targets, showcasing excellence."
  },
  outstandingProjectDelivery: {
    key: "outstandingProjectDelivery",
    severity: "medium",
    status: "positive",
    description: "Completed a project with excellent results.",
    label: "You delivered projects with outstanding results and quality."
  },
  processImprovementImplementation: {
    key: "processImprovementImplementation",
    severity: "medium",
    status: "positive",
    description: "Improved work processes for efficiency.",
    label: "You improved processes, leading to greater team and company efficiency."
  },
  technicalExcellence: {
    key: "technicalExcellence",
    severity: "medium",
    status: "positive",
    description: "Demonstrated strong technical skills.",
    label: "You demonstrated exceptional technical expertise in your role."
  },
  professionalCertification: {
    key: "professionalCertification",
    severity: "medium",
    status: "positive",
    description: "Earned a recognized professional certification.",
    label: "You achieved a professional certification, enhancing your credibility."
  },
  higherEducationQualification: {
    key: "higherEducationQualification",
    severity: "medium",
    status: "positive",
    description: "Achieved a new academic degree.",
    label: "You pursued higher education and earned a valuable qualification."
  },
  multipleDegrees: {
    key: "multipleDegrees",
    severity: "medium",
    status: "positive",
    description: "Holds more than one academic degree.",
    label: "You hold multiple academic degrees, reflecting strong academic credentials."
  },
  onlineCoursesCompleted: {
    key: "onlineCoursesCompleted",
    severity: "medium",
    status: "positive",
    description: "Completed relevant online courses.",
    label: "You successfully completed relevant online courses to build your skills."
  },
  researchPublications: {
    key: "researchPublications",
    severity: "medium",
    status: "positive",
    description: "Published research papers.",
    label: "You have published impactful research papers."
  },
  conferenceSpeaker: {
    key: "conferenceSpeaker",
    severity: "medium",
    status: "positive",
    description: "Presented at professional conferences.",
    label: "You were a speaker at professional conferences, sharing valuable knowledge."
  },
  extracurricularAchievements: {
    key: "extracurricularAchievements",
    severity: "medium",
    status: "positive",
    description: "Recognized for achievements in extracurricular activities.",
    label: "You were recognized for significant achievements outside of work."
  },
  highestProductivityAchievement: {
    key: "highestProductivityAchievement",
    severity: "aboveMedium",
    status: "positive",
    description: "Produced the most output effectively.",
    label: "You achieved the highest level of productivity within your team."
  },
  costSavingsInitiative: {
    key: "costSavingsInitiative",
    severity: "aboveMedium",
    status: "positive",
    description: "Helped the company save money through initiatives.",
    label: "You contributed significantly to company cost savings through innovative initiatives."
  },
  multiSkilledProficiency: {
    key: "multiSkilledProficiency",
    severity: "aboveMedium",
    status: "positive",
    description: "Skilled in multiple areas of work.",
    label: "You demonstrated expertise across multiple skills and domains."
  },
  proactiveProblemSolver: {
    key: "proactiveProblemSolver",
    severity: "aboveMedium",
    status: "positive",
    description: "Identified and solved issues before they grew.",
    label: "You proactively identified and solved potential issues before they escalated."
  },
  innovationAward: {
    key: "innovationAward",
    severity: "aboveMedium",
    status: "positive",
    description: "Created a new and useful idea or solution.",
    label: "You received recognition for innovative ideas and impactful solutions."
  },
  projectLeadershipSuccess: {
    key: "projectLeadershipSuccess",
    severity: "aboveMedium",
    status: "positive",
    description: "Successfully led important projects.",
    label: "You successfully led complex projects to completion."
  },
  internalTrainerExcellence: {
    key: "internalTrainerExcellence",
    severity: "aboveMedium",
    status: "positive",
    description: "Trained others effectively within the company.",
    label: "You excelled in training and upskilling your colleagues internally."
  },
  complianceChampion: {
    key: "complianceChampion",
    severity: "aboveMedium",
    status: "positive",
    description: "Ensured rules and policies were followed.",
    label: "You played a key role in ensuring compliance with company policies."
  },
  valuesCultureChampion: {
    key: "valuesCultureChampion",
    severity: "high",
    status: "positive",
    description: "Lived and promoted company values.",
    label: "You actively promoted and lived the company's core values."
  },
  mentorshipKnowledgeSharing: {
    key: "mentorshipKnowledgeSharing",
    severity: "high",
    status: "positive",
    description: "Helped others learn and grow through mentorship.",
    label: "You made a significant impact by mentoring and sharing knowledge with others."
  },
  safetyChampionAward: {
    key: "safetyChampionAward",
    severity: "high",
    status: "positive",
    description: "Promoted and maintained workplace safety.",
    label: "You were recognized for actively maintaining workplace safety standards."
  },
  ethicsIntegrityAward: {
    key: "ethicsIntegrityAward",
    severity: "high",
    status: "positive",
    description: "Followed high moral values and honesty.",
    label: "You demonstrated high ethical standards and integrity at work."
  },
  adaptabilityResilience: {
    key: "adaptabilityResilience",
    severity: "high",
    status: "positive",
    description: "Adjusted well to changes and challenges.",
    label: "You displayed great adaptability and resilience in challenging situations."
  },
  proactiveProblemSolverImpact: {
    key: "proactiveProblemSolverImpact",
    severity: "high",
    status: "positive",
    description: "Solved significant issues proactively.",
    label: "You solved critical problems proactively, preventing major risks."
  },
  highPeerFeedbackScore: {
    key: "highPeerFeedbackScore",
    severity: "high",
    status: "positive",
    description: "Received high ratings and feedback from colleagues.",
    label: "You received excellent peer feedback for your contributions."
  },
  highCustomerRating: {
    key: "highCustomerRating",
    severity: "high",
    status: "positive",
    description: "Received excellent ratings from customers.",
    label: "You received outstanding customer ratings for your service or work."
  },
  qualityExcellenceAward: {
    key: "qualityExcellenceAward",
    severity: "veryHigh",
    status: "positive",
    description: "Delivered top-quality work with no errors.",
    label: "Your work consistently demonstrated excellence and high quality."
  },
  employeeOfTheYear: {
    key: "employeeOfTheYear",
    severity: "veryHigh",
    status: "positive",
    description: "Recognized as the best employee for the whole year.",
    label: "You were recognized as the Employee of the Year."
  },
  hackathonContestWinner: {
    key: "hackathonContestWinner",
    severity: "veryHigh",
    status: "positive",
    description: "Won in a company or industry competition.",
    label: "You won a significant hackathon or competition."
  },
  bestManagerAward: {
    key: "bestManagerAward",
    severity: "veryHigh",
    status: "positive",
    description: "Recognized as best manager.",
    label: "You were awarded as the Best Manager for your leadership."
  },
  crisisHeroismRecognition: {
    key: "crisisHeroismRecognition",
    severity: "veryHigh",
    status: "positive",
    description: "Helped during emergencies or crises.",
    label: "You demonstrated heroism during a crisis or emergency."
  },
  longServiceAward: {
    key: "longServiceAward",
    severity: "veryHigh",
    status: "positive",
    description: "Honored for many years of dedicated service.",
    label: "You were honored for your long-term service and dedication."
  },
  clientAppreciationLetter: {
    key: "clientAppreciationLetter",
    severity: "veryHigh",
    status: "positive",
    description: "Received a thank-you letter from a client.",
    label: "You received client appreciation for exceptional service."
  },
  publicCommendation: {
    key: "publicCommendation",
    severity: "veryHigh",
    status: "positive",
    description: "Praised publicly by company or industry leaders.",
    label: "You received public recognition from leadership or industry experts."
  },
  industryExternalAward: {
    key: "industryExternalAward",
    severity: "veryHigh",
    status: "positive",
    description: "Recognized by an external industry body.",
    label: "You were recognized with a prestigious external industry award."
  },
  communityCSRContribution: {
    key: "communityCSRContribution",
    severity: "veryHigh",
    status: "positive",
    description: "Contributed significantly to social or community projects.",
    label: "You made a meaningful contribution to community or CSR projects."
  },
  promotionToTeamLeadManager: {
    key: "promotionToTeamLeadManager",
    severity: "veryHigh",
    status: "positive",
    description: "Promoted to lead a team or manage a department.",
    label: "You were promoted to a team lead or managerial role."
  },
  patentPublicationAchieved: {
    key: "patentPublicationAchieved",
    severity: "elite",
    status: "positive",
    description: "Published work or received a patent.",
    label: "You achieved a published patent or innovative research recognition."
  },
  startupFounder: {
    key: "startupFounder",
    severity: "elite",
    status: "positive",
    description: "Founded a startup company successfully.",
    label: "You successfully founded and built a startup."
  },
  internationalAssignment: {
    key: "internationalAssignment",
    severity: "elite",
    status: "positive",
    description: "Worked abroad on company projects.",
    label: "You completed a successful international work assignment."
  },
  innovationRecognition: {
    key: "innovationRecognition",
    severity: "elite",
    status: "positive",
    description: "Received recognition for innovation at industry level.",
    label: "You received industry recognition for innovative contributions."
  },
  successfulProductLaunches: {
    key: "successfulProductLaunches",
    severity: "elite",
    status: "positive",
    description: "Successfully launched a product with significant impact.",
    label: "You successfully launched a product that made a major impact."
  },
  revenueCostSavingImpact: {
    key: "revenueCostSavingImpact",
    severity: "elite",
    status: "positive",
    description: "Created measurable revenue growth or cost savings.",
    label: "You delivered significant revenue growth or cost savings."
  },
  promotionToSeniorLeadership: {
    key: "promotionToSeniorLeadership",
    severity: "elite",
    status: "positive",
    description: "Promoted to a senior leadership role.",
    label: "You were promoted to a senior leadership position."
  },
  companyBrandValueRecognition: {
    key: "companyBrandValueRecognition",
    severity: "elite",
    status: "positive",
    description: "Worked in a company with high brand value or reputation.",
    label: "You worked for a company recognized for its strong brand value."
  },
  workedInFAANG: {
    key: "workedInFAANG",
    severity: "elite",
    status: "positive",
    description: "Experience working in a FAANG company.",
    label: "You have valuable experience working in a FAANG company."
  },
  workedInBig4Consulting: {
    key: "workedInBig4Consulting",
    severity: "elite",
    status: "positive",
    description: "Experience working in a Big 4 consulting firm.",
    label: "You have gained experience in a prestigious Big 4 consulting firm."
  },
  workedInFortune500: {
    key: "workedInFortune500",
    severity: "elite",
    status: "positive",
    description: "Experience working in a Fortune 500 company.",
    label: "You have worked with a globally recognized Fortune 500 company."
  },
  workedInUnicornStartup: {
    key: "workedInUnicornStartup",
    severity: "elite",
    status: "positive",
    description: "Experience working in a unicorn startup.",
    label: "You contributed to the growth of a unicorn startup."
  },
  workedInGovtPSU: {
    key: "workedInGovtPSU",
    severity: "elite",
    status: "positive",
    description: "Experience working in a government PSU.",
    label: "You have valuable experience working in a government PSU organization."
  },
  experienceAbroad: {
    key: "experienceAbroad",
    severity: "elite",
    status: "positive",
    description: "Work experience outside home country.",
    label: "You have significant work experience outside your home country."
  },
  crossDepartmentExperience: {
    key: "crossDepartmentExperience",
    severity: "elite",
    status: "positive",
    description: "Experience working across multiple departments.",
    label: "You have gained diverse experience working across multiple departments."
  },
  internationalRoleProgression: {
    key: "internationalRoleProgression",
    severity: "elite",
    status: "positive",
    description: "Progressed in international roles during career.",
    label: "You achieved career growth through international role progression."
  },
  switchNonCoreToCoreRole: {
    key: "switchNonCoreToCoreRole",
    severity: "elite",
    status: "positive",
    description: "Switched from a non-core to core relevant role.",
    label: "You successfully transitioned from a non-core to a core role."
  },
  clarityInCareerPath: {
    key: "clarityInCareerPath",
    severity: "elite",
    status: "positive",
    description: "Demonstrated clear and logical career growth path.",
    label: "You have demonstrated a clear and logical career path progression."
  },
  budgetResponsibility: {
    key: "budgetResponsibility",
    severity: "elite",
    status: "positive",
    description: "Managed financial budgets effectively.",
    label: "You managed significant financial budgets effectively."
  },
  teamSizeManaged: {
    key: "teamSizeManaged",
    severity: "elite",
    status: "positive",
    description: "Managed a large team successfully.",
    label: "You successfully managed a large team with strong leadership."
  },
  managementResponsibility: {
    key: "managementResponsibility",
    severity: "elite",
    status: "positive",
    description: "Handled significant management responsibilities.",
    label: "You have taken on major management responsibilities."
  },
  roleLevelProgression: {
    key: "roleLevelProgression",
    severity: "elite",
    status: "positive",
    description: "Demonstrated strong career growth across job levels.",
    label: "You demonstrated consistent growth across various job levels."
  },
  numberOfPromotions: {
    key: "numberOfPromotions",
    severity: "elite",
    status: "positive",
    description: "Received multiple promotions over career.",
    label: "You have been promoted multiple times in your career."
  },
  averageTimeToPromotion: {
    key: "averageTimeToPromotion",
    severity: "elite",
    status: "positive",
    description: "Achieved promotions faster than average.",
    label: "You achieved career promotions at a faster pace than the average."
  },
  fieldOfStudyRelevance: {
    key: "fieldOfStudyRelevance",
    severity: "elite",
    status: "positive",
    description: "Field of study is highly relevant to the role.",
    label: "Your field of study is highly relevant to your professional role."
  },
  highestEducationLevel: {
    key: "highestEducationLevel",
    severity: "elite",
    status: "positive",
    description: "Achieved highest academic degree.",
    label: "You have attained the highest level of academic achievement."
  },
  certificationsCount: {
    key: "certificationsCount",
    severity: "elite",
    status: "positive",
    description: "Completed multiple certifications.",
    label: "You have successfully completed multiple certifications."
  },
  certificationsRelevance: {
    key: "certificationsRelevance",
    severity: "elite",
    status: "positive",
    description: "Certifications are highly relevant to the job.",
    label: "Your certifications are highly relevant to the job role."
  },
  researchGateProfile: {
    key: "researchGateProfile",
    severity: "elite",
    status: "positive",
    description: "Maintains a professional profile on ResearchGate.",
    label: "You actively maintain a professional ResearchGate profile."
  },
  googleScholarCitations: {
    key: "googleScholarCitations",
    severity: "elite",
    status: "positive",
    description: "Number of citations on Google Scholar reflects impact.",
    label: "Your research impact is evident through Google Scholar citations."
  },
  mediumBlogArticles: {
    key: "mediumBlogArticles",
    severity: "elite",
    status: "positive",
    description: "Published insightful articles on Medium or personal blog.",
    label: "You have published thought-leadership articles on Medium or blogs."
  },
  conferenceAttendance: {
    key: "conferenceAttendance",
    severity: "elite",
    status: "positive",
    description: "Actively participates in professional conferences.",
    label: "You actively attend and participate in professional conferences."
  },
  webinarsConducted: {
    key: "webinarsConducted",
    severity: "elite",
    status: "positive",
    description: "Conducted webinars for knowledge sharing.",
    label: "You have conducted webinars to share knowledge with others."
  },
  industryForumsParticipation: {
    key: "industryForumsParticipation",
    severity: "elite",
    status: "positive",
    description: "Actively participates in industry forums.",
    label: "You actively engage in important industry forums."
  },
  hackathonParticipation: {
    key: "hackathonParticipation",
    severity: "elite",
    status: "positive",
    description: "Participates in hackathons to solve real problems.",
    label: "You have actively participated in hackathons to solve challenges."
  },
  experienceInTargetIndustry: {
    key: "experienceInTargetIndustry",
    severity: "elite",
    status: "positive",
    description: "Has relevant experience in target industry.",
    label: "You bring strong experience in the target industry."
  },
  freelanceConsultingExperience: {
    key: "freelanceConsultingExperience",
    severity: "elite",
    status: "positive",
    description: "Worked as freelancer or consultant effectively.",
    label: "You have successfully worked as a freelancer or consultant."
  },
  crmErpKnowledge: {
    key: "crmErpKnowledge",
    severity: "elite",
    status: "positive",
    description: "Proficient in CRM or ERP tools.",
    label: "You are highly proficient in CRM and ERP tools."
  },
  cloudPlatformsExperience: {
    key: "cloudPlatformsExperience",
    severity: "elite",
    status: "positive",
    description: "Experienced in cloud platform operations.",
    label: "You have valuable experience working with cloud platforms."
  },
  aiMlExposure: {
    key: "aiMlExposure",
    severity: "elite",
    status: "positive",
    description: "Exposed to AI or ML technologies in work.",
    label: "You have exposure to AI and ML technologies in your work."
  },
  cybersecurityKnowledge: {
    key: "cybersecurityKnowledge",
    severity: "elite",
    status: "positive",
    description: "Knowledgeable in cybersecurity practices.",
    label: "You possess strong knowledge of cybersecurity practices."
  },
  foreignLanguageFluency: {
    key: "foreignLanguageFluency",
    severity: "elite",
    status: "positive",
    description: "Fluent in multiple foreign languages.",
    label: "You are fluent in multiple foreign languages."
  },
  programmingLanguages: {
    key: "programmingLanguages",
    severity: "elite",
    status: "positive",
    description: "Knows multiple programming languages.",
    label: "You are proficient in multiple programming languages."
  },
  projectManagementTools: {
    key: "projectManagementTools",
    severity: "elite",
    status: "positive",
    description: "Proficient in project management tools.",
    label: "You are skilled in using project management tools."
  },
  designToolsKnowledge: {
    key: "designToolsKnowledge",
    severity: "elite",
    status: "positive",
    description: "Experienced in using design tools.",
    label: "You have strong experience with design tools."
  },
  linkedinProfileStrength: {
    key: "linkedinProfileStrength",
    severity: "elite",
    status: "positive",
    description: "Maintains a strong professional LinkedIn profile.",
    label: "You maintain a strong and professional LinkedIn profile."
  },
  githubContributions: {
    key: "githubContributions",
    severity: "elite",
    status: "positive",
    description: "Actively contributes on GitHub repositories.",
    label: "You actively contribute to open-source projects on GitHub."
  },
  attitudeOfPerson: {
    key: "attitudeOfPerson",
    severity: "elite",
    status: "positive",
    description: "Exhibits a consistently positive attitude.",
    label: "You consistently exhibit a positive and professional attitude."
  },
  commitmentsTowardsCompanyGoals: {
    key: "commitmentsTowardsCompanyGoals",
    severity: "elite",
    status: "positive",
    description: "Strongly committed to achieving company objectives.",
    label: "You are deeply committed to achieving company goals and objectives."
  }
};



// export const feedbackParamsNegative: feedbackParamsProps[] = {
//    {
// key : "ghostingAfterOffer:"
//     severity: "veryHigh",
//     status: "negative",
//     description: "Candidate accepts a job offer but then stops responding and doesn’t join.",
//     label: "One of your employers mentioned that you accepted a job offer but later stopped responding and didn’t join, which reflects poorly on your reliability."
//   },
//   {
//     key: "jobAbandonment",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Employee leaves the job suddenly without any notice.",
//     label: "It was reported that you left a job suddenly without providing any notice, which affected the team and company operations."
//   },
//   {
//     key: "notServingNoticePeriod",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Resigning but not working through the required notice period.",
//     label: "An employer stated that you resigned without completing your notice period, causing disruptions in the workflow."
//   },
//   {
//     key: "insubordination",
//     severity: "high",
//     status: "negative",
//     description: "Willful refusal to obey legitimate work orders or blatant disrespect toward supervisors.",
//     label: "Feedback indicated instances of refusal to follow instructions or showing disrespect to supervisors."
//   },
//   {
//     key: "workplaceBullyingHarassment",
//     severity: "high",
//     status: "negative",
//     description: "Repeated rude or disrespectful behavior toward coworkers.",
//     label: "Your behavior was reported as repeatedly rude or disrespectful towards colleagues."
//   },
//   {
//     key: "threatsOrIntimidation",
//     severity: "high",
//     status: "negative",
//     description: "Saying or writing threats to hurt coworkers or the company.",
//     label: "It was mentioned that you issued threats or intimidating remarks towards others at work."
//   },
//   {
//     key: "unprofessionalConduct",
//     severity: "medium",
//     status: "negative",
//     description: "Persistent unprofessional behavior at work.",
//     label: "Feedback suggests consistent unprofessional behavior in the workplace."
//   },
//   {
//     key: "conflictOfInterest",
//     severity: "high",
//     status: "negative",
//     description: "Doing activities or having relationships that conflict with the company’s interests without disclosure.",
//     label: "There were concerns raised about a potential conflict of interest due to undisclosed activities or relationships."
//   },
//   {
//     key: "moonlightingForCompetitor",
//     severity: "high",
//     status: "negative",
//     description: "Taking a second job with a direct competitor without employer’s knowledge.",
//     label: "It was reported that you worked for a competitor without informing your employer, which is considered unethical."
//   },
//   {
//     key: "abuseOfAuthority",
//     severity: "high",
//     status: "negative",
//     description: "Misusing one’s position or authority for personal gain or to mistreat others.",
//     label: "Feedback indicated misuse of authority or position to gain unfair advantage or mistreat others."
//   },
//   {
//     key: "acceptingBribesKickbacks",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Soliciting or accepting bribes or kickbacks from clients/suppliers.",
//     label: "You were reported for accepting or soliciting bribes, which is a severe violation of trust."
//   },
//   {
//     key: "poshViolation",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Any form of sexual harassment at the workplace.",
//     label: "An incident was reported under the POSH policy, which is taken very seriously."
//   },
//   {
//     key: "discriminationHateSpeech",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Demonstrating bias or using slurs against someone’s protected characteristics.",
//     label: "Feedback suggests discriminatory behavior or the use of inappropriate language towards others."
//   },
//   {
//     key: "workplaceViolence",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Any physical violence or assault at work.",
//     label: "An incident of workplace violence or assault was reported involving you."
//   },
//   {
//     key: "substanceAbuseOnDuty",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Being intoxicated or using illegal drugs during work hours.",
//     label: "You were reported to be under the influence of substances during work hours, which is strictly prohibited."
//   },
//   {
//     key: "criminalConductConviction",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Engaging in criminal activity or being convicted of a serious crime.",
//     label: "Your record reflects involvement in serious criminal activity or conviction."
//   },
//   {
//     key: "dataPrivacyViolation",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Sharing or mishandling personal or sensitive data.",
//     label: "There were reports of mishandling or leaking sensitive company or client data."
//   },
//   {
//     key: "insiderTradingInsiderDataMisuse",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Using inside company information for unfair gain.",
//     label: "You were reported for misusing confidential company information for personal gain."
//   },
//   {
//     key: "regulatoryComplianceBreach",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Breaking laws or rules the company must follow.",
//     label: "Feedback indicates a breach of regulatory compliance, which could harm the company legally."
//   },
//   {
//     key: "poorPerformanceIncompetence",
//     severity: "medium",
//     status: "negative",
//     description: "Not doing the job well or lacking needed skills.",
//     label: "It was reported that your performance did not meet the required standards."
//   },
//   {
//     key: "grossNegligence",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Careless actions that cause serious problems.",
//     label: "Feedback indicates that your actions were careless and caused serious issues."
//   },
//   {
//     key: "attendanceIssues",
//     severity: "medium",
//     status: "negative",
//     description: "Often being absent or late to work.",
//     label: "There are consistent reports of tardiness or frequent absences from work."
//   },
//   {
//     key: "financialFraudEmbezzlement",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Stealing company money or misusing funds.",
//     label: "You were reported for financial fraud or embezzling company funds."
//   },
//   {
//     key: "theftCompanyPropertyOrData",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Stealing company property or confidential data.",
//     label: "Feedback indicates theft of company property or sensitive information."
//   },
//   {
//     key: "expenseFraud",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Making false expense claims for money.",
//     label: "It was reported that you submitted false expense claims for financial gain."
//   },
//   {
//     key: "timesheetFraud",
//     severity: "high",
//     status: "negative",
//     description: "Lying about work hours to get paid more.",
//     label: "There were concerns that you reported incorrect work hours to receive extra pay."
//   },
//   {
//     key: "fakeDocumentation",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Using fake documents for personal benefit.",
//     label: "Feedback suggests the use of fake documentation for personal advantage."
//   },
//   {
//     key: "forgedDocumentsOnTheJob",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Creating or using fake documents at work.",
//     label: "An employer reported that you created or used forged documents in the workplace."
//   },
//   {
//     key: "identityImpersonationFraud",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Pretending to be someone else for fraud.",
//     label: "You were reported for impersonating someone else to commit fraud."
//   },
//   {
//     key: "sabotageMaliciousDamage",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Damaging company property on purpose.",
//     label: "There were reports of intentional damage to company property."
//   },
//   {
//     key: "itSecurityPolicyViolation",
//     severity: "high",
//     status: "negative",
//     description: "Breaking IT security rules or company policies.",
//     label: "You were reported for violating IT security policies."
//   },
//   {
//     key: "socialMediaMisconduct",
//     severity: "high",
//     status: "negative",
//     description: "Posting harmful or inappropriate content online about company.",
//     label: "An employer reported inappropriate or harmful posts about the company on social media."
//   },
//   {
//     key: "misuseOfCompanyResources",
//     severity: "high",
//     status: "negative",
//     description: "Using company tools or assets for personal gain.",
//     label: "Feedback suggests that you misused company resources for personal benefit."
//   },
//   {
//     key: "repeatedDisciplinaryInfractions",
//     severity: "high",
//     status: "negative",
//     description: "Breaking rules repeatedly after warnings.",
//     label: "There were multiple instances of rule-breaking even after being warned."
//   },
//   {
//     key: "poorGigWorkerRating",
//     severity: "medium",
//     status: "negative",
//     description: "Getting low ratings from clients or customers.",
//     label: "You received consistently low ratings from clients or customers."
//   },
//   {
//     key: "highCancellationNoShowRate",
//     severity: "medium",
//     status: "negative",
//     description: "Canceling jobs or not showing up too often.",
//     label: "Feedback shows that you frequently canceled or missed scheduled jobs."
//   },
//   {
//     key: "platformPolicyViolations",
//     severity: "medium",
//     status: "negative",
//     description: "Breaking rules of the gig platform.",
//     label: "You were reported for violating the rules of the platform you were working on."
//   },
//   {
//     key: "fraudulentActivitiesInGigs",
//     severity: "high",
//     status: "negative",
//     description: "Cheating or doing fraud in gig work.",
//     label: "There were reports of fraudulent activities while performing gig-related work."
//   },
//   {
//     key: "unsafePracticesGigFieldWork",
//     severity: "high",
//     status: "negative",
//     description: "Working in unsafe ways that risk harm.",
//     label: "Feedback indicates unsafe practices while performing field-related gig work."
//   },
//   {
//     key: "lossOfLicenseCertification",
//     severity: "high",
//     status: "negative",
//     description: "Losing required license or certification for job.",
//     label: "It was reported that you lost a mandatory license or certification required for your role."
//   },
//   {
//     key: "nepotismFavoritism",
//     severity: "medium",
//     status: "negative",
//     description: "Giving unfair advantage to friends or family.",
//     label: "Feedback suggests favoritism or nepotism in decision-making or opportunities."
//   },
//   {
//     key: "offDutyMisconduct",
//     severity: "medium",
//     status: "negative",
//     description: "Bad behavior outside work that hurts company image.",
//     label: "Your behavior outside work was reported to have negatively impacted the company’s reputation."
//   },
//   {
//     key: "sleepingOnTheJob",
//     severity: "low",
//     status: "negative",
//     description: "Sleeping during work hours.",
//     label: "You were observed sleeping during work hours, which affected productivity."
//   },
//   {
//     key: "plagiarismIntellectualPropertyTheft",
//     severity: "high",
//     status: "negative",
//     description: "Copying others’ work or stealing ideas.",
//     label: "It was reported that you copied others' work or used ideas without permission."
//   },
//   {
//     key: "retaliationAgainstComplainants",
//     severity: "high",
//     status: "negative",
//     description: "Punishing or mistreating those who complained.",
//     label: "Feedback indicates retaliation against individuals who raised concerns or complaints."
//   },
//   {
//     key: "illicitBehaviorOnPremises",
//     severity: "high",
//     status: "negative",
//     description: "Doing illegal or inappropriate acts at workplace.",
//     label: "There were reports of illegal or inappropriate behavior within the workplace."
//   },
//   {
//     key: "teamworkLackOfCollaboration",
//     severity: "medium",
//     status: "negative",
//     description: "Not working well with team members or resisting collaboration.",
//     label: "It was observed that you often struggled to collaborate effectively with your team, impacting group productivity."
//   },
//   {
//     key: "communicationIssues",
//     severity: "medium",
//     status: "negative",
//     description: "Poor communication or failure to share important information.",
//     label: "Feedback indicated gaps in communication, leading to misunderstandings and inefficiencies."
//   },
//   {
//     key: "dishonestyOrMisrepresentation",
//     severity: "high",
//     status: "negative",
//     description: "Lying, falsifying records, or misrepresenting facts.",
//     label: "You were reported for dishonesty or misrepresentation, which damages trust within the organization."
//   },
//   {
//     key: "timeTheft",
//     severity: "medium",
//     status: "negative",
//     description: "Misusing work hours for personal tasks without approval.",
//     label: "It was noted that work hours were often spent on personal activities, reducing productivity."
//   },
//   {
//     key: "unauthorizedLeave",
//     severity: "medium",
//     status: "negative",
//     description: "Taking leave without proper approval or notice.",
//     label: "You took leave without informing or getting approval, causing inconvenience to your team."
//   },
//   {
//     key: "failureToMeetDeadlines",
//     severity: "medium",
//     status: "negative",
//     description: "Consistently missing project deadlines or deliverables.",
//     label: "Feedback indicates repeated delays in meeting deadlines, affecting team performance."
//   },
//   {
//     key: "resistingFeedback",
//     severity: "low",
//     status: "negative",
//     description: "Refusing to accept constructive criticism or guidance.",
//     label: "It was reported that you were resistant to feedback, hindering growth and improvement."
//   },
//   {
//     key: "negativeAttitude",
//     severity: "low",
//     status: "negative",
//     description: "Displaying a consistently negative or pessimistic outlook at work.",
//     label: "Your attitude was perceived as overly negative, affecting workplace morale."
//   },
//   {
//     key: "gossipingOrRumorSpreading",
//     severity: "low",
//     status: "negative",
//     description: "Engaging in workplace gossip or spreading rumors.",
//     label: "You were reported for spreading gossip, which created tension among colleagues."
//   },
//   {
//     key: "ignoringCompanyPolicies",
//     severity: "medium",
//     status: "negative",
//     description: "Frequently disregarding established company policies or rules.",
//     label: "It was observed that you often ignored company policies, leading to compliance issues."
//   },
//   {
//     key: "securityProtocolViolation",
//     severity: "high",
//     status: "negative",
//     description: "Failure to follow critical security protocols, risking company data.",
//     label: "You were reported for violating security protocols, putting sensitive information at risk."
//   },
//   {
//     key: "unauthorizedAccess",
//     severity: "high",
//     status: "negative",
//     description: "Accessing systems, files, or areas without proper authorization.",
//     label: "Feedback indicates you accessed restricted systems or data without permission."
//   },
//   {
//     key: "misuseOfCompanyProperty",
//     severity: "medium",
//     status: "negative",
//     description: "Improper use of company resources for personal purposes.",
//     label: "It was reported that company assets were used for personal gain without authorization."
//   },
//   {
//     key: "failureToDocumentWork",
//     severity: "low",
//     status: "negative",
//     description: "Not maintaining required documentation or records of work.",
//     label: "There were reports of incomplete documentation, creating difficulties for the team."
//   },
//   {
//     key: "unreliableWorkQuality",
//     severity: "medium",
//     status: "negative",
//     description: "Work quality is inconsistent and requires frequent corrections.",
//     label: "Your output was reported as inconsistent, often requiring extra effort to correct."
//   },
//   {
//     key: "lackOfInitiative",
//     severity: "low",
//     status: "negative",
//     description: "Failing to take initiative or ownership of tasks.",
//     label: "Feedback suggests a lack of initiative in taking ownership of projects or responsibilities."
//   },
//   {
//     key: "customerComplaint",
//     severity: "high",
//     status: "negative",
//     description: "Receiving formal complaints from clients or customers.",
//     label: "A client or customer formally complained about your behavior or performance."
//   },
//   {
//     key: "missedSalesTargets",
//     severity: "medium",
//     status: "negative",
//     description: "Consistently failing to meet assigned sales or performance targets.",
//     label: "You were reported for regularly missing assigned sales or performance goals."
//   },
//   {
//     key: "miscommunicationWithClients",
//     severity: "medium",
//     status: "negative",
//     description: "Providing incorrect or unclear information to clients.",
//     label: "Feedback indicated instances where unclear communication caused client dissatisfaction."
//   },
//   {
//     key: "breachOfConfidentiality",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Revealing confidential company or client information.",
//     label: "You were reported for sharing confidential information without proper authorization."
//   },
//   {
//     key: "favoritismOrNepotism",
//     severity: "medium",
//     status: "negative",
//     description: "Showing unfair favoritism toward certain individuals.",
//     label: "There were concerns about favoritism or biased treatment of team members."
//   },
//   {
//     key: "lackOfAccountability",
//     severity: "medium",
//     status: "negative",
//     description: "Avoiding responsibility or blaming others for mistakes.",
//     label: "Feedback suggests a pattern of avoiding accountability for your actions."
//   },
//   {
//     key: "hostileWorkEnvironmentCreation",
//     severity: "high",
//     status: "negative",
//     description: "Contributing to a toxic or hostile workplace atmosphere.",
//     label: "It was reported that your behavior contributed to a negative work environment."
//   },
//   {
//     key: "failureToFollowSafetyRules",
//     severity: "high",
//     status: "negative",
//     description: "Not following workplace health and safety rules.",
//     label: "There were concerns about your failure to follow essential safety procedures."
//   },
//   {
//     key: "unethicalSalesPractices",
//     severity: "high",
//     status: "negative",
//     description: "Engaging in manipulative or deceptive sales tactics.",
//     label: "Feedback indicated the use of unethical practices to achieve sales goals."
//   },
//   {
//     key: "overPromisingToClients",
//     severity: "medium",
//     status: "negative",
//     description: "Making unrealistic promises to clients that cannot be fulfilled.",
//     label: "You were reported for making commitments to clients that couldn’t be delivered."
//   },
//   {
//     key: "failureToSupportTeam",
//     severity: "low",
//     status: "negative",
//     description: "Not providing support or help to teammates when needed.",
//     label: "It was noted that you did not actively support your team when assistance was required."
//   },
//   {
//     key: "conflictAvoidance",
//     severity: "low",
//     status: "negative",
//     description: "Avoiding necessary discussions to resolve conflicts.",
//     label: "You were reported for avoiding necessary conflict resolution conversations."
//   },
//   {
//     key: "frequentComplaintsFromPeers",
//     severity: "medium",
//     status: "negative",
//     description: "Colleagues frequently raise concerns about your behavior or performance.",
//     label: "Multiple peers expressed dissatisfaction with your behavior or work practices."
//   },
//   {
//     key: "projectAbandonment",
//     severity: "high",
//     status: "negative",
//     description: "Leaving projects incomplete without explanation or handover.",
//     label: "Feedback suggests you abandoned projects without proper transition planning."
//   },
//   {
//     key: "failureToAdaptToChange",
//     severity: "low",
//     status: "negative",
//     description: "Struggling to adjust to new processes or technologies.",
//     label: "You were reported for resistance to adapting to changes in processes or tools."
//   },
//   {
//     key: "carelessnessWithEquipment",
//     severity: "low",
//     status: "negative",
//     description: "Improper handling of tools, machines, or equipment.",
//     label: "There were reports of mishandling company equipment or resources."
//   },
//   {
//     key: "dataEntryErrors",
//     severity: "low",
//     status: "negative",
//     description: "Frequent mistakes while entering or maintaining data.",
//     label: "Feedback highlighted repeated errors in data entry tasks."
//   },
//   {
//     key: "resistingTeamDecisions",
//     severity: "medium",
//     status: "negative",
//     description: "Refusing to align with team decisions or directions.",
//     label: "It was reported that you resisted collective team decisions, slowing progress."
//   },
//   {
//     key: "misuseOfCompanyEmail",
//     severity: "low",
//     status: "negative",
//     description: "Sending inappropriate or unauthorized emails through company systems.",
//     label: "You were reported for using company email for unauthorized or personal matters."
//   },
//   {
//     key: "lateSubmissionOfReports",
//     severity: "low",
//     status: "negative",
//     description: "Frequently submitting reports after deadlines.",
//     label: "Reports or documentation were regularly delayed, impacting workflow."
//   },
//   {
//     key: "lackOfProfessionalGrowth",
//     severity: "low",
//     status: "negative",
//     description: "Showing little effort to develop skills or grow professionally.",
//     label: "Feedback indicates minimal effort toward professional development."
//   },
//   {
//     key: "failureToRespectDiversity",
//     severity: "medium",
//     status: "negative",
//     description: "Not respecting diverse cultures, backgrounds, or perspectives.",
//     label: "It was reported that you did not demonstrate respect for diversity in the workplace."
//   },
//   {
//     key: "abandoningClientMeetings",
//     severity: "high",
//     status: "negative",
//     description: "Missing client meetings without prior notice or valid reason.",
//     label: "Feedback suggests repeated absence from important client meetings without communication."
//   },
//   {
//     key: "inappropriateLanguageUse",
//     severity: "medium",
//     status: "negative",
//     description: "Using offensive or unprofessional language at work.",
//     label: "You were reported for using inappropriate language in professional settings."
//   },
//   {
//     key: "failureToMentorJuniors",
//     severity: "low",
//     status: "negative",
//     description: "Not providing expected guidance or mentorship to junior employees.",
//     label: "There were concerns about lack of mentorship or guidance for junior staff members."
//   },
//   {
//     key: "overDependenceOnSupervision",
//     severity: "low",
//     status: "negative",
//     description: "Needing constant supervision to complete tasks.",
//     label: "Feedback indicates over-reliance on supervisors for task completion."
//   },
//   {
//     key: "poorConflictResolution",
//     severity: "medium",
//     status: "negative",
//     description: "Handling conflicts poorly or escalating issues unnecessarily.",
//     label: "You were reported for ineffective conflict resolution, leading to workplace friction."
//   },
//   {
//     key: "failureToMaintainCleanWorkspace",
//     severity: "low",
//     status: "negative",
//     description: "Neglecting to maintain a clean or organized workspace.",
//     label: "Your workspace was repeatedly noted as unclean or disorganized."
//   },
//   {
//     key: "passiveAggressiveBehavior",
//     severity: "medium",
//     status: "negative",
//     description: "Displaying indirect resistance or hostility instead of addressing issues openly.",
//     label: "Feedback suggests a pattern of passive-aggressive behavior affecting team morale."
//   },
//   {
//     key: "publicCriticismOfTeam",
//     severity: "medium",
//     status: "negative",
//     description: "Criticizing team members publicly instead of providing constructive feedback privately.",
//     label: "It was reported that you criticized colleagues publicly, causing discomfort."
//   },
//   {
//     key: "failureToPrioritizeTasks",
//     severity: "medium",
//     status: "negative",
//     description: "Consistently failing to prioritize work effectively.",
//     label: "You were reported for struggling to manage priorities, leading to missed deadlines."
//   },
//   {
//     key: "failureToUpdateSkills",
//     severity: "low",
//     status: "negative",
//     description: "Not staying up-to-date with necessary skills or industry knowledge.",
//     label: "It was reported that you did not actively update your skills, leading to outdated practices."
//   },
//   {
//     key: "ignoringManagerInstructions",
//     severity: "medium",
//     status: "negative",
//     description: "Failing to follow direct instructions from a manager or supervisor.",
//     label: "Feedback indicated instances where you ignored clear instructions from management."
//   },
//   {
//     key: "failureToMeetKPIs",
//     severity: "medium",
//     status: "negative",
//     description: "Consistently failing to meet defined key performance indicators.",
//     label: "You were reported for repeatedly missing agreed performance metrics or KPIs."
//   },
//   {
//     key: "lackOfTransparency",
//     severity: "medium",
//     status: "negative",
//     description: "Withholding important information or not being open in communication.",
//     label: "There were concerns about a lack of transparency in your communication."
//   },
//   {
//     key: "inefficientWorkMethods",
//     severity: "low",
//     status: "negative",
//     description: "Using outdated or inefficient methods, slowing down productivity.",
//     label: "Feedback suggests that you often used inefficient work methods that delayed progress."
//   },
//   {
//     key: "lowProductivity",
//     severity: "medium",
//     status: "negative",
//     description: "Producing significantly less work output than expected.",
//     label: "It was reported that your overall productivity was consistently below expectations."
//   },
//   {
//     key: "poorTimeManagement",
//     severity: "medium",
//     status: "negative",
//     description: "Inability to manage time effectively, leading to delays and missed deadlines.",
//     label: "Feedback highlighted recurring issues with time management impacting project timelines."
//   },
//   {
//     key: "failureToReportIssues",
//     severity: "low",
//     status: "negative",
//     description: "Not reporting known issues or risks to management in time.",
//     label: "You were reported for failing to escalate important issues on time, causing preventable problems."
//   },
//   {
//     key: "unnecessaryWorkplaceConflicts",
//     severity: "medium",
//     status: "negative",
//     description: "Starting unnecessary arguments or conflicts with colleagues.",
//     label: "Feedback suggests you were involved in creating avoidable conflicts at work."
//   },
//   {
//     key: "overRelianceOnOthers",
//     severity: "low",
//     status: "negative",
//     description: "Frequently depending on others to complete basic tasks.",
//     label: "It was reported that you relied too heavily on teammates for tasks you could manage independently."
//   },
//   {
//     key: "ignoringClientFeedback",
//     severity: "medium",
//     status: "negative",
//     description: "Failing to take client feedback seriously or address their concerns.",
//     label: "Feedback indicated that you did not adequately respond to client concerns or suggestions."
//   },
//   {
//     key: "failureToDocumentProcesses",
//     severity: "low",
//     status: "negative",
//     description: "Not documenting key processes for future reference.",
//     label: "You were reported for not maintaining proper process documentation, affecting team continuity."
//   },
//   {
//     key: "wastingCompanyResources",
//     severity: "low",
//     status: "negative",
//     description: "Careless or unnecessary use of company resources.",
//     label: "It was reported that company resources were wasted due to lack of careful usage."
//   },
//   {
//     key: "inappropriateSocialMediaActivity",
//     severity: "medium",
//     status: "negative",
//     description: "Posting inappropriate content or comments about the company online.",
//     label: "Feedback suggests inappropriate or unprofessional posts were made on social media about the company."
//   },
//   {
//     key: "refusalToWorkOvertimeWhenRequired",
//     severity: "low",
//     status: "negative",
//     description: "Declining to work reasonable overtime when urgently needed by the team.",
//     label: "It was reported that you declined to support the team during critical periods requiring overtime."
//   },
//   {
//     key: "disrespectingCulturalNorms",
//     severity: "medium",
//     status: "negative",
//     description: "Showing insensitivity or disrespect to cultural norms in the workplace.",
//     label: "Feedback indicates insensitivity to cultural differences among colleagues or clients."
//   },
//   {
//     key: "failureToSupportCompanyValues",
//     severity: "medium",
//     status: "negative",
//     description: "Not demonstrating commitment to company mission or values.",
//     label: "It was noted that your actions often did not align with company values and mission."
//   },
//   {
//     key: "avoidingResponsibilityForMistakes",
//     severity: "medium",
//     status: "negative",
//     description: "Not owning up to mistakes or attempting to shift blame.",
//     label: "You were reported for avoiding responsibility and placing blame on others."
//   },
//   {
//     key: "failureToMaintainProfessionalBoundaries",
//     severity: "medium",
//     status: "negative",
//     description: "Blurring personal and professional boundaries inappropriately.",
//     label: "Feedback indicates you struggled to maintain appropriate professional boundaries."
//   },
//   {
//     key: "lowEngagement",
//     severity: "low",
//     status: "negative",
//     description: "Showing little interest or involvement in team or company initiatives.",
//     label: "It was reported that you showed limited enthusiasm or participation in company activities."
//   },
//   {
//     key: "failureToFollowUp",
//     severity: "low",
//     status: "negative",
//     description: "Not following up on tasks or communications as required.",
//     label: "Feedback indicated frequent lapses in following up on pending tasks or communications."
//   },
//   {
//     key: "negativeInfluenceOnPeers",
//     severity: "medium",
//     status: "negative",
//     description: "Negatively influencing peers with unproductive behaviors or attitudes.",
//     label: "Your behavior was reported to have a negative influence on peers or team culture."
//   },
//   {
//     key: "failureToEscalateCriticalIssues",
//     severity: "high",
//     status: "negative",
//     description: "Not escalating urgent or critical issues to leadership.",
//     label: "It was reported that urgent issues were not escalated in time, leading to significant problems."
//   },
//   {
//     key: "disregardForDeadlines",
//     severity: "medium",
//     status: "negative",
//     description: "Consistently missing deadlines without valid reasons.",
//     label: "Feedback highlights repeated disregard for set deadlines."
//   },
//   {
//     key: "failureToMeetClientExpectations",
//     severity: "medium",
//     status: "negative",
//     description: "Delivering work that does not meet client requirements or expectations.",
//     label: "It was reported that deliverables often fell short of client expectations."
//   },
//   {
//     key: "ineffectiveDelegation",
//     severity: "low",
//     status: "negative",
//     description: "Not delegating tasks effectively, leading to inefficiencies.",
//     label: "Feedback suggests poor delegation practices, causing delays or confusion."
//   },
//   {
//     key: "overPromisingInternally",
//     severity: "medium",
//     status: "negative",
//     description: "Making commitments to colleagues that are not fulfilled.",
//     label: "You were reported for overpromising internally and failing to deliver."
//   },
//   {
//     key: "disrespectingHierarchy",
//     severity: "medium",
//     status: "negative",
//     description: "Failing to respect organizational hierarchy and reporting lines.",
//     label: "Feedback indicated a lack of respect for reporting structures or management."
//   },
//   {
//     key: "failureToHandleConfidentialDataSecurely",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Mishandling or exposing confidential data due to negligence.",
//     label: "It was reported that confidential data was mishandled, posing significant risks."
//   },
//   {
//     key: "overDependenceOnTechnology",
//     severity: "low",
//     status: "negative",
//     description: "Relying too heavily on technology without manual checks or verification.",
//     label: "Feedback indicated excessive reliance on tools without proper verification, causing errors."
//   },
//   {
//     key: "failureToMeetTrainingRequirements",
//     severity: "low",
//     status: "negative",
//     description: "Not completing required training or certifications on time.",
//     label: "You were reported for failing to complete mandatory training programs."
//   },
//   {
//     key: "inconsistentAttendance",
//     severity: "medium",
//     status: "negative",
//     description: "Irregular attendance affecting work consistency and reliability.",
//     label: "Feedback indicates inconsistent attendance patterns affecting team stability."
//   },
//   {
//     key: "failureToLeadEffectively",
//     severity: "high",
//     status: "negative",
//     description: "Poor leadership performance, failing to guide or support team members.",
//     label: "You were reported for ineffective leadership that hindered team performance."
//   },
//   {
//     key: "lackOfProblemSolvingSkills",
//     severity: "medium",
//     status: "negative",
//     description: "Struggling to analyze and resolve work-related problems.",
//     label: "Feedback suggests difficulty in identifying and solving critical problems."
//   },
//   {
//     key: "failureToFollowEthicalStandards",
//     severity: "high",
//     status: "negative",
//     description: "Engaging in actions that violate ethical guidelines.",
//     label: "It was reported that certain actions violated ethical standards of the company."
//   },
//   {
//     key: "lowTeamMoraleContribution",
//     severity: "low",
//     status: "negative",
//     description: "Failing to contribute positively to team morale.",
//     label: "Feedback indicated a lack of contribution to maintaining team morale."
//   },
//   {
//     key: "failureToManageStress",
//     severity: "low",
//     status: "negative",
//     description: "Not handling work-related stress effectively, impacting performance.",
//     label: "You were reported for difficulty in managing stress, affecting your work output."
//   },
//   {
//     key: "unwillingnessToLearn",
//     severity: "low",
//     status: "negative",
//     description: "Refusing to learn new skills or adapt to changes.",
//     label: "Feedback suggests resistance to learning and personal growth."
//   },
//   {
//     key: "lackOfAttentionToDetail",
//     severity: "medium",
//     status: "negative",
//     description: "Frequently overlooking important details, leading to mistakes.",
//     label: "It was reported that frequent mistakes occurred due to lack of attention to detail."
//   },
//   {
//     key: "failureToMaintainWorkLifeBalance",
//     severity: "low",
//     status: "negative",
//     description: "Allowing poor work-life balance to affect work performance.",
//     label: "Feedback indicated that work-life imbalance negatively impacted your productivity."
//   },
//   {
//     key: "ignoringTeamFeedback",
//     severity: "medium",
//     status: "negative",
//     description: "Not taking team feedback into consideration during decision-making.",
//     label: "You were reported for dismissing constructive team feedback."
//   },
//   {
//     key: "failureToImprovePerformanceAfterWarnings",
//     severity: "high",
//     status: "negative",
//     description: "Ignoring repeated performance warnings without improvement.",
//     label: "Feedback indicated no improvement despite multiple performance warnings."
//   },
//   {
//     key: "failureToManageRemoteWorkEffectively",
//     severity: "medium",
//     status: "negative",
//     description: "Struggling to maintain productivity while working remotely.",
//     label: "It was reported that remote work performance did not meet expectations."
//   },
//   {
//     key: "failureToComplyWithLegalRequirements",
//     severity: "veryHigh",
//     status: "negative",
//     description: "Not adhering to legal requirements relevant to the role or industry.",
//     label: "Feedback highlighted non-compliance with legal or regulatory obligations."
//   },
//   {
//     key: "ignoringClientDeadlines",
//     severity: "medium",
//     status: "negative",
//     description: "Missing client deadlines, affecting relationships and trust.",
//     label: "You were reported for failing to meet critical client deadlines."
//   },
//   {
//     key: "failureToMaintainTeamHarmony",
//     severity: "medium",
//     status: "negative",
//     description: "Not taking steps to resolve team disputes or maintain harmony.",
//     label: "Feedback indicated insufficient effort in maintaining a harmonious team environment."
//   },
//   {
//     key: "unprofessionalPublicBehavior",
//     severity: "medium",
//     status: "negative",
//     description: "Acting unprofessionally outside the workplace, affecting company reputation.",
//     label: "It was reported that public behavior negatively impacted the company’s image."
//   },
//   {
//     key: "failureToSupportInnovation",
//     severity: "low",
//     status: "negative",
//     description: "Not encouraging or participating in innovation initiatives.",
//     label: "Feedback suggests a lack of contribution toward innovation and improvement efforts."
//   }
// };

// export const feedbackParamsPositive: feedbackParamsProps[] = [
//   // veryLow
//   {
//     key: "perfectAttendancePunctuality",
//     severity: "veryLow",
//     status: "positive",
//     description: "Always on time and present at work.",
//     label: "You consistently maintained perfect attendance and punctuality."
//   },
//   {
//     key: "languagesKnown",
//     severity: "veryLow",
//     status: "positive",
//     description: "Languages candidate can speak or write.",
//     label: "You are proficient in multiple languages, which adds value to communication."
//   },
//   {
//     key: "internationalEducationExposure",
//     severity: "veryLow",
//     status: "positive",
//     description: "Education experience in another country.",
//     label: "Your international education exposure reflects diverse learning experiences."
//   },
//   {
//     key: "minorOnlineCoursesCompleted",
//     severity: "veryLow",
//     status: "positive",
//     description: "Completed minor online learning courses.",
//     label: "You have completed minor online courses, showing dedication to continuous learning."
//   },
//   {
//     key: "basicTechnicalToolsMastery",
//     severity: "veryLow",
//     status: "positive",
//     description: "Has basic knowledge of technical tools.",
//     label: "You possess essential technical tool knowledge required for the role."
//   },

//   // low
//   {
//     key: "employeeOfTheMonthQuarter",
//     severity: "low",
//     status: "positive",
//     description: "Recognized as the best employee in a specific period.",
//     label: "You were recognized as the employee of the month or quarter for exceptional performance."
//   },
//   {
//     key: "spotAwardForExtraEffort",
//     severity: "low",
//     status: "positive",
//     description: "Rewarded for going above and beyond in a task.",
//     label: "You received a spot award for putting in extra effort beyond expectations."
//   },
//   {
//     key: "advancedTrainingCompleted",
//     severity: "low",
//     status: "positive",
//     description: "Completed advanced training successfully.",
//     label: "You successfully completed advanced training programs to enhance your skills."
//   },
//   {
//     key: "mentorshipProvided",
//     severity: "low",
//     status: "positive",
//     description: "Provided guidance or helped others learn.",
//     label: "You contributed to the growth of others by providing mentorship and guidance."
//   },
//   {
//     key: "minorCertificationsCount",
//     severity: "low",
//     status: "positive",
//     description: "Completed small but relevant certifications.",
//     label: "You have completed relevant minor certifications to strengthen your profile."
//   },
//   {
//     key: "extracurricularActivities",
//     severity: "low",
//     status: "positive",
//     description: "Participated in extracurricular activities.",
//     label: "You actively participated in extracurricular activities, showcasing versatility."
//   },
//   {
//     key: "volunteeringWork",
//     severity: "low",
//     status: "positive",
//     description: "Participated in volunteering activities.",
//     label: "You engaged in volunteering work, reflecting social responsibility."
//   },

//   // belowAverage
//   {
//     key: "teamPlayerAward",
//     severity: "belowAverage",
//     status: "positive",
//     description: "Helped teammates and collaborated effectively.",
//     label: "You were recognized as a valuable team player for your collaborative efforts."
//   },
//   {
//     key: "communicationExcellence",
//     severity: "belowAverage",
//     status: "positive",
//     description: "Spoke and wrote clearly and effectively.",
//     label: "You demonstrated excellent communication skills, both verbal and written."
//   },
//   {
//     key: "conflictResolutionExcellence",
//     severity: "belowAverage",
//     status: "positive",
//     description: "Resolved conflicts positively and productively.",
//     label: "You showed strong conflict resolution abilities by resolving disputes effectively."
//   },
//   {
//     key: "highCustomerSatisfactionScores",
//     severity: "belowAverage",
//     status: "positive",
//     description: "Received very positive feedback from customers.",
//     label: "Your work has consistently earned high customer satisfaction ratings."
//   },
//   {
//     key: "peerAppreciationNomination",
//     severity: "belowAverage",
//     status: "positive",
//     description: "Nominated by peers for good work.",
//     label: "Your peers nominated you for your exceptional contributions and teamwork."
//   },
//   {
//     key: "teamChoiceAward",
//     severity: "belowAverage",
//     status: "positive",
//     description: "Chosen by the team as the best contributor.",
//     label: "Your team selected you as the most valuable contributor."
//   },
//   {
//     key: "publicSpeaking",
//     severity: "belowAverage",
//     status: "positive",
//     description: "Demonstrated strong public speaking skills.",
//     label: "You exhibited strong public speaking and presentation abilities."
//   },
//   {
//     key: "eventOrganization",
//     severity: "belowAverage",
//     status: "positive",
//     description: "Organized company or public events effectively.",
//     label: "You successfully organized impactful company or public events."
//   },

//   // moderate
//   {
//     key: "exceededPerformanceTargets",
//     severity: "medium",
//     status: "positive",
//     description: "Achieved more than expected goals.",
//     label: "You consistently exceeded performance targets, showcasing excellence."
//   },
//   {
//     key: "outstandingProjectDelivery",
//     severity: "medium",
//     status: "positive",
//     description: "Completed a project with excellent results.",
//     label: "You delivered projects with outstanding results and quality."
//   },
//   {
//     key: "processImprovementImplementation",
//     severity: "medium",
//     status: "positive",
//     description: "Improved work processes for efficiency.",
//     label: "You improved processes, leading to greater team and company efficiency."
//   },
//   {
//     key: "technicalExcellence",
//     severity: "medium",
//     status: "positive",
//     description: "Demonstrated strong technical skills.",
//     label: "You demonstrated exceptional technical expertise in your role."
//   },
//   {
//     key: "professionalCertification",
//     severity: "medium",
//     status: "positive",
//     description: "Earned a recognized professional certification.",
//     label: "You achieved a professional certification, enhancing your credibility."
//   },
//   {
//     key: "higherEducationQualification",
//     severity: "medium",
//     status: "positive",
//     description: "Achieved a new academic degree.",
//     label: "You pursued higher education and earned a valuable qualification."
//   },
//   {
//     key: "multipleDegrees",
//     severity: "medium",
//     status: "positive",
//     description: "Holds more than one academic degree.",
//     label: "You hold multiple academic degrees, reflecting strong academic credentials."
//   },
//   {
//     key: "onlineCoursesCompleted",
//     severity: "medium",
//     status: "positive",
//     description: "Completed relevant online courses.",
//     label: "You successfully completed relevant online courses to build your skills."
//   },
//   {
//     key: "researchPublications",
//     severity: "medium",
//     status: "positive",
//     description: "Published research papers.",
//     label: "You have published impactful research papers."
//   },
//   {
//     key: "conferenceSpeaker",
//     severity: "medium",
//     status: "positive",
//     description: "Presented at professional conferences.",
//     label: "You were a speaker at professional conferences, sharing valuable knowledge."
//   },
//   {
//     key: "extracurricularAchievements",
//     severity: "medium",
//     status: "positive",
//     description: "Recognized for achievements in extracurricular activities.",
//     label: "You were recognized for significant achievements outside of work."
//   },
//   {
//     key: "highestProductivityAchievement",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Produced the most output effectively.",
//     label: "You achieved the highest level of productivity within your team."
//   },
//   {
//     key: "costSavingsInitiative",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Helped the company save money through initiatives.",
//     label: "You contributed significantly to company cost savings through innovative initiatives."
//   },
//   {
//     key: "multiSkilledProficiency",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Skilled in multiple areas of work.",
//     label: "You demonstrated expertise across multiple skills and domains."
//   },
//   {
//     key: "proactiveProblemSolver",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Identified and solved issues before they grew.",
//     label: "You proactively identified and solved potential issues before they escalated."
//   },
//   {
//     key: "innovationAward",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Created a new and useful idea or solution.",
//     label: "You received recognition for innovative ideas and impactful solutions."
//   },
//   {
//     key: "projectLeadershipSuccess",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Successfully led important projects.",
//     label: "You successfully led complex projects to completion."
//   },
//   {
//     key: "internalTrainerExcellence",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Trained others effectively within the company.",
//     label: "You excelled in training and upskilling your colleagues internally."
//   },
//   {
//     key: "complianceChampion",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Ensured rules and policies were followed.",
//     label: "You played a key role in ensuring compliance with company policies."
//   },
//   {
//     key: "valuesCultureChampion",
//     severity: "high",
//     status: "positive",
//     description: "Lived and promoted company values.",
//     label: "You actively promoted and lived the company's core values."
//   },
//   {
//     key: "mentorshipKnowledgeSharing",
//     severity: "high",
//     status: "positive",
//     description: "Helped others learn and grow through mentorship.",
//     label: "You made a significant impact by mentoring and sharing knowledge with others."
//   },
//   {
//     key: "safetyChampionAward",
//     severity: "high",
//     status: "positive",
//     description: "Promoted and maintained workplace safety.",
//     label: "You were recognized for actively maintaining workplace safety standards."
//   },
//   {
//     key: "ethicsIntegrityAward",
//     severity: "high",
//     status: "positive",
//     description: "Followed high moral values and honesty.",
//     label: "You demonstrated high ethical standards and integrity at work."
//   },
//   {
//     key: "publicSpeaking",
//     severity: "belowAverage",
//     status: "positive",
//     description: "Demonstrated strong public speaking skills.",
//     label: "You displayed excellent public speaking abilities."
//   },
//   {
//     key: "eventOrganization",
//     severity: "belowAverage",
//     status: "positive",
//     description: "Organized company or public events effectively.",
//     label: "You successfully organized impactful company or public events."
//   },
//   {
//     key: "exceededPerformanceTargets",
//     severity: "medium",
//     status: "positive",
//     description: "Achieved more than expected goals.",
//     label: "You exceeded your performance targets, showcasing exceptional results."
//   },
//   {
//     key: "outstandingProjectDelivery",
//     severity: "medium",
//     status: "positive",
//     description: "Completed a project with excellent results.",
//     label: "You delivered a project with outstanding results."
//   },
//   {
//     key: "processImprovementImplementation",
//     severity: "medium",
//     status: "positive",
//     description: "Improved work processes for efficiency.",
//     label: "You implemented significant process improvements to enhance efficiency."
//   },
//   {
//     key: "technicalExcellence",
//     severity: "medium",
//     status: "positive",
//     description: "Demonstrated strong technical skills.",
//     label: "You showcased exceptional technical skills and expertise."
//   },
//   {
//     key: "professionalCertification",
//     severity: "medium",
//     status: "positive",
//     description: "Earned a recognized professional certification.",
//     label: "You achieved a valued professional certification."
//   },
//   {
//     key: "higherEducationQualification",
//     severity: "medium",
//     status: "positive",
//     description: "Achieved a new academic degree.",
//     label: "You successfully completed a higher education qualification."
//   },
//   {
//     key: "multipleDegrees",
//     severity: "medium",
//     status: "positive",
//     description: "Holds more than one academic degree.",
//     label: "You hold multiple academic degrees showcasing diverse expertise."
//   },
//   {
//     key: "onlineCoursesCompleted",
//     severity: "medium",
//     status: "positive",
//     description: "Completed relevant online courses.",
//     label: "You completed relevant online courses, enhancing your skills."
//   },
//   {
//     key: "researchPublications",
//     severity: "medium",
//     status: "positive",
//     description: "Published research papers.",
//     label: "Your research work has been successfully published."
//   },
//   {
//     key: "conferenceSpeaker",
//     severity: "medium",
//     status: "positive",
//     description: "Presented at professional conferences.",
//     label: "You delivered impactful presentations at professional conferences."
//   },
//   {
//     key: "extracurricularAchievements",
//     severity: "medium",
//     status: "positive",
//     description: "Recognized for achievements in extracurricular activities.",
//     label: "You were recognized for significant extracurricular achievements."
//   },
//   {
//     key: "highestProductivityAchievement",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Produced the most output effectively.",
//     label: "You achieved the highest level of productivity in your team."
//   },
//   {
//     key: "costSavingsInitiative",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Helped the company save money through initiatives.",
//     label: "Your initiative led to notable cost savings for the company."
//   },
//   {
//     key: "multiSkilledProficiency",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Skilled in multiple areas of work.",
//     label: "You have demonstrated proficiency across multiple skill areas."
//   },
//   {
//     key: "proactiveProblemSolver",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Identified and solved issues before they grew.",
//     label: "You proactively identified and solved problems before escalation."
//   },
//   {
//     key: "innovationAward",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Created a new and useful idea or solution.",
//     label: "Your innovation resulted in meaningful and impactful outcomes."
//   },
//   {
//     key: "projectLeadershipSuccess",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Successfully led important projects.",
//     label: "You successfully led projects to achieve key goals."
//   },
//   {
//     key: "internalTrainerExcellence",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Trained others effectively within the company.",
//     label: "You effectively trained and developed team members internally."
//   },
//   {
//     key: "complianceChampion",
//     severity: "aboveMedium",
//     status: "positive",
//     description: "Ensured rules and policies were followed.",
//     label: "You played a key role in ensuring compliance with company policies."
//   },
//   {
//     key: "valuesCultureChampion",
//     severity: "high",
//     status: "positive",
//     description: "Lived and promoted company values.",
//     label: "You actively lived and promoted the organization's core values."
//   },
//   {
//     key: "mentorshipKnowledgeSharing",
//     severity: "high",
//     status: "positive",
//     description: "Helped others learn and grow through mentorship.",
//     label: "You significantly contributed to others' growth through mentorship."
//   },
//   {
//     key: "safetyChampionAward",
//     severity: "high",
//     status: "positive",
//     description: "Promoted and maintained workplace safety.",
//     label: "You promoted and upheld high workplace safety standards."
//   },
//   {
//     key: "ethicsIntegrityAward",
//     severity: "high",
//     status: "positive",
//     description: "Followed high moral values and honesty.",
//     label: "You demonstrated strong ethics and integrity consistently."
//   },
//   {
//     key: "adaptabilityResilience",
//     severity: "high",
//     status: "positive",
//     description: "Adjusted well to changes and challenges.",
//     label: "You displayed great adaptability and resilience in challenging situations."
//   },
//   {
//     key: "proactiveProblemSolverImpact",
//     severity: "high",
//     status: "positive",
//     description: "Solved significant issues proactively.",
//     label: "You solved critical problems proactively, preventing major risks."
//   },
//   {
//     key: "highPeerFeedbackScore",
//     severity: "high",
//     status: "positive",
//     description: "Received high ratings and feedback from colleagues.",
//     label: "You received excellent peer feedback for your contributions."
//   },
//   {
//     key: "highCustomerRating",
//     severity: "high",
//     status: "positive",
//     description: "Received excellent ratings from customers.",
//     label: "You received outstanding customer ratings for your service or work."
//   },
//   {
//     key: "qualityExcellenceAward",
//     severity: "veryHigh",
//     status: "positive",
//     description: "Delivered top-quality work with no errors.",
//     label: "Your work consistently demonstrated excellence and high quality."
//   },
//   {
//     key: "employeeOfTheYear",
//     severity: "veryHigh",
//     status: "positive",
//     description: "Recognized as the best employee for the whole year.",
//     label: "You were recognized as the Employee of the Year."
//   },
//   {
//     key: "hackathonContestWinner",
//     severity: "veryHigh",
//     status: "positive",
//     description: "Won in a company or industry competition.",
//     label: "You won a significant hackathon or competition."
//   },
//   {
//     key: "bestManagerAward",
//     severity: "veryHigh",
//     status: "positive",
//     description: "Recognized as best manager.",
//     label: "You were awarded as the Best Manager for your leadership."
//   },
//   {
//     key: "crisisHeroismRecognition",
//     severity: "veryHigh",
//     status: "positive",
//     description: "Helped during emergencies or crises.",
//     label: "You demonstrated heroism during a crisis or emergency."
//   },
//   {
//     key: "longServiceAward",
//     severity: "veryHigh",
//     status: "positive",
//     description: "Honored for many years of dedicated service.",
//     label: "You were honored for your long-term service and dedication."
//   },
//   {
//     key: "clientAppreciationLetter",
//     severity: "veryHigh",
//     status: "positive",
//     description: "Received a thank-you letter from a client.",
//     label: "You received client appreciation for exceptional service."
//   },
//   {
//     key: "publicCommendation",
//     severity: "veryHigh",
//     status: "positive",
//     description: "Praised publicly by company or industry leaders.",
//     label: "You received public recognition from leadership or industry experts."
//   },
//   {
//     key: "industryExternalAward",
//     severity: "veryHigh",
//     status: "positive",
//     description: "Recognized by an external industry body.",
//     label: "You were recognized with a prestigious external industry award."
//   },
//   {
//     key: "communityCSRContribution",
//     severity: "veryHigh",
//     status: "positive",
//     description: "Contributed significantly to social or community projects.",
//     label: "You made a meaningful contribution to community or CSR projects."
//   },
//   {
//     key: "promotionToTeamLeadManager",
//     severity: "veryHigh",
//     status: "positive",
//     description: "Promoted to lead a team or manage a department.",
//     label: "You were promoted to a team lead or managerial role."
//   },
//   {
//     key: "patentPublicationAchieved",
//     severity: "elite",
//     status: "positive",
//     description: "Published work or received a patent.",
//     label: "You achieved a published patent or innovative research recognition."
//   },
//   {
//     key: "startupFounder",
//     severity: "elite",
//     status: "positive",
//     description: "Founded a startup company successfully.",
//     label: "You successfully founded and built a startup."
//   },
//   {
//     key: "internationalAssignment",
//     severity: "elite",
//     status: "positive",
//     description: "Worked abroad on company projects.",
//     label: "You completed a successful international work assignment."
//   },
//   {
//     key: "innovationRecognition",
//     severity: "elite",
//     status: "positive",
//     description: "Received recognition for innovation at industry level.",
//     label: "You received industry recognition for innovative contributions."
//   },
//   {
//     key: "successfulProductLaunches",
//     severity: "elite",
//     status: "positive",
//     description: "Successfully launched a product with significant impact.",
//     label: "You successfully launched a product that made a major impact."
//   },
//   {
//     key: "revenueCostSavingImpact",
//     severity: "elite",
//     status: "positive",
//     description: "Created measurable revenue growth or cost savings.",
//     label: "You delivered significant revenue growth or cost savings."
//   },
//   {
//     key: "promotionToSeniorLeadership",
//     severity: "elite",
//     status: "positive",
//     description: "Promoted to a senior leadership role.",
//     label: "You were promoted to a senior leadership position."
//   },
//   {
//     key: "companyBrandValueRecognition",
//     severity: "elite",
//     status: "positive",
//     description: "Worked in a company with high brand value or reputation.",
//     label: "You worked for a company recognized for its strong brand value."
//   },
//   {
//     key: "workedInFAANG",
//     severity: "elite",
//     status: "positive",
//     description: "Experience working in a FAANG company.",
//     label: "You have valuable experience working in a FAANG company."
//   },
//   {
//     key: "workedInBig4Consulting",
//     severity: "elite",
//     status: "positive",
//     description: "Experience working in a Big 4 consulting firm.",
//     label: "You have gained experience in a prestigious Big 4 consulting firm."
//   },
//   {
//     key: "workedInFortune500",
//     severity: "elite",
//     status: "positive",
//     description: "Experience working in a Fortune 500 company.",
//     label: "You have worked with a globally recognized Fortune 500 company."
//   },
//   {
//     key: "workedInUnicornStartup",
//     severity: "elite",
//     status: "positive",
//     description: "Experience working in a unicorn startup.",
//     label: "You contributed to the growth of a unicorn startup."
//   },
//   {
//     key: "workedInGovtPSU",
//     severity: "elite",
//     status: "positive",
//     description: "Experience working in a government PSU.",
//     label: "You have valuable experience working in a government PSU organization."
//   },
//   {
//     key: "experienceAbroad",
//     severity: "elite",
//     status: "positive",
//     description: "Work experience outside home country.",
//     label: "You have significant work experience outside your home country."
//   },
//   {
//     key: "crossDepartmentExperience",
//     severity: "elite",
//     status: "positive",
//     description: "Experience working across multiple departments.",
//     label: "You have gained diverse experience working across multiple departments."
//   },
//   {
//     key: "internationalRoleProgression",
//     severity: "elite",
//     status: "positive",
//     description: "Progressed in international roles during career.",
//     label: "You achieved career growth through international role progression."
//   },
//   {
//     key: "switchNonCoreToCoreRole",
//     severity: "elite",
//     status: "positive",
//     description: "Switched from a non-core to core relevant role.",
//     label: "You successfully transitioned from a non-core to a core role."
//   },
//   {
//     key: "clarityInCareerPath",
//     severity: "elite",
//     status: "positive",
//     description: "Demonstrated clear and logical career growth path.",
//     label: "You have demonstrated a clear and logical career path progression."
//   },
//   {
//     key: "budgetResponsibility",
//     severity: "elite",
//     status: "positive",
//     description: "Managed financial budgets effectively.",
//     label: "You managed significant financial budgets effectively."
//   },
//   {
//     key: "teamSizeManaged",
//     severity: "elite",
//     status: "positive",
//     description: "Managed a large team successfully.",
//     label: "You successfully managed a large team with strong leadership."
//   },
//   {
//     key: "managementResponsibility",
//     severity: "elite",
//     status: "positive",
//     description: "Handled significant management responsibilities.",
//     label: "You have taken on major management responsibilities."
//   },
//   {
//     key: "roleLevelProgression",
//     severity: "elite",
//     status: "positive",
//     description: "Demonstrated strong career growth across job levels.",
//     label: "You demonstrated consistent growth across various job levels."
//   },
//   {
//     key: "numberOfPromotions",
//     severity: "elite",
//     status: "positive",
//     description: "Received multiple promotions over career.",
//     label: "You have been promoted multiple times in your career."
//   },
//   {
//     key: "averageTimeToPromotion",
//     severity: "elite",
//     status: "positive",
//     description: "Achieved promotions faster than average.",
//     label: "You achieved career promotions at a faster pace than the average."
//   },
//   {
//     key: "fieldOfStudyRelevance",
//     severity: "elite",
//     status: "positive",
//     description: "Field of study is highly relevant to the role.",
//     label: "Your field of study is highly relevant to your professional role."
//   },
//   {
//     key: "highestEducationLevel",
//     severity: "elite",
//     status: "positive",
//     description: "Achieved highest academic degree.",
//     label: "You have attained the highest level of academic achievement."
//   },
//   {
//     key: "certificationsCount",
//     severity: "elite",
//     status: "positive",
//     description: "Completed multiple certifications.",
//     label: "You have successfully completed multiple certifications."
//   },
//   {
//     key: "certificationsRelevance",
//     severity: "elite",
//     status: "positive",
//     description: "Certifications are highly relevant to the job.",
//     label: "Your certifications are highly relevant to the job role."
//   },
//   {
//     key: "researchGateProfile",
//     severity: "elite",
//     status: "positive",
//     description: "Maintains a professional profile on ResearchGate.",
//     label: "You actively maintain a professional ResearchGate profile."
//   },
//   {
//     key: "googleScholarCitations",
//     severity: "elite",
//     status: "positive",
//     description: "Number of citations on Google Scholar reflects impact.",
//     label: "Your research impact is evident through Google Scholar citations."
//   },
//   {
//     key: "mediumBlogArticles",
//     severity: "elite",
//     status: "positive",
//     description: "Published insightful articles on Medium or personal blog.",
//     label: "You have published thought-leadership articles on Medium or blogs."
//   },
//   {
//     key: "conferenceAttendance",
//     severity: "elite",
//     status: "positive",
//     description: "Actively participates in professional conferences.",
//     label: "You actively attend and participate in professional conferences."
//   },
//   {
//     key: "webinarsConducted",
//     severity: "elite",
//     status: "positive",
//     description: "Conducted webinars for knowledge sharing.",
//     label: "You have conducted webinars to share knowledge with others."
//   },
//   {
//     key: "industryForumsParticipation",
//     severity: "elite",
//     status: "positive",
//     description: "Actively participates in industry forums.",
//     label: "You actively engage in important industry forums."
//   },
//   {
//     key: "hackathonParticipation",
//     severity: "elite",
//     status: "positive",
//     description: "Participates in hackathons to solve real problems.",
//     label: "You have actively participated in hackathons to solve challenges."
//   },
//   {
//     key: "experienceInTargetIndustry",
//     severity: "elite",
//     status: "positive",
//     description: "Has relevant experience in target industry.",
//     label: "You bring strong experience in the target industry."
//   },
//   {
//     key: "freelanceConsultingExperience",
//     severity: "elite",
//     status: "positive",
//     description: "Worked as freelancer or consultant effectively.",
//     label: "You have successfully worked as a freelancer or consultant."
//   },
//   {
//     key: "crmErpKnowledge",
//     severity: "elite",
//     status: "positive",
//     description: "Proficient in CRM or ERP tools.",
//     label: "You are highly proficient in CRM and ERP tools."
//   },
//   {
//     key: "cloudPlatformsExperience",
//     severity: "elite",
//     status: "positive",
//     description: "Experienced in cloud platform operations.",
//     label: "You have valuable experience working with cloud platforms."
//   },
//   {
//     key: "aiMlExposure",
//     severity: "elite",
//     status: "positive",
//     description: "Exposed to AI or ML technologies in work.",
//     label: "You have exposure to AI and ML technologies in your work."
//   },
//   {
//     key: "cybersecurityKnowledge",
//     severity: "elite",
//     status: "positive",
//     description: "Knowledgeable in cybersecurity practices.",
//     label: "You possess strong knowledge of cybersecurity practices."
//   },
//   {
//     key: "foreignLanguageFluency",
//     severity: "elite",
//     status: "positive",
//     description: "Fluent in multiple foreign languages.",
//     label: "You are fluent in multiple foreign languages."
//   },
//   {
//     key: "programmingLanguages",
//     severity: "elite",
//     status: "positive",
//     description: "Knows multiple programming languages.",
//     label: "You are proficient in multiple programming languages."
//   },
//   {
//     key: "projectManagementTools",
//     severity: "elite",
//     status: "positive",
//     description: "Proficient in project management tools.",
//     label: "You are skilled in using project management tools."
//   },
//   {
//     key: "designToolsKnowledge",
//     severity: "elite",
//     status: "positive",
//     description: "Experienced in using design tools.",
//     label: "You have strong experience with design tools."
//   },
//   {
//     key: "linkedinProfileStrength",
//     severity: "elite",
//     status: "positive",
//     description: "Maintains a strong professional LinkedIn profile.",
//     label: "You maintain a strong and professional LinkedIn profile."
//   },
//   {
//     key: "githubContributions",
//     severity: "elite",
//     status: "positive",
//     description: "Actively contributes on GitHub repositories.",
//     label: "You actively contribute to open-source projects on GitHub."
//   },
//   {
//     key: "attitudeOfPerson",
//     severity: "elite",
//     status: "positive",
//     description: "Exhibits a consistently positive attitude.",
//     label: "You consistently exhibit a positive and professional attitude."
//   },
//   {
//     key: "commitmentsTowardsCompanyGoals",
//     severity: "elite",
//     status: "positive",
//     description: "Strongly committed to achieving company objectives.",
//     label: "You are deeply committed to achieving company goals and objectives."
//   }
// ]


// 232 nagetive & 