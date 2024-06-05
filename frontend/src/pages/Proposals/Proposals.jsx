import React from "react";
import ProposalCard from "./components/ProposalCard.jsx";

const Proposals = () => {
  // Sample data, in real scenario this would come from your database
  const activeProposals = [
    {
      dateInitiated: "Jun 5, 2024",
      timeAgo: "30 seconds ago",
      projectLink: "#",
      profile: "General Profile",
    },
    {
      dateInitiated: "Jun 5, 2024",
      timeAgo: "30 seconds ago",
      projectLink: "#",
      profile: "General Profile",
    },
  ];
  const submittedProposals = [
    {
      dateInitiated: "Jun 5, 2024",
      timeAgo: "30 seconds ago",
      projectLink: "#",
      profile: "General Profile",
    },
  ];

  return (
    <div className="w-full mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] px-4 py-16 min-h-screen">
      <h1 className="text-5xl font-medium mb-8">My Proposals</h1>

      <div className="bg-white shadow-md border border-[#D9D9D9] rounded-2xl p-6 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            Active proposals{" "}
            <span className="text-gray-500">({activeProposals.length})</span>
          </h2>
        </div>
        {activeProposals.map((proposal, index) => (
          <ProposalCard
            key={index}
            dateInitiated={proposal.dateInitiated}
            timeAgo={proposal.timeAgo}
            projectLink={proposal.projectLink}
            profile={proposal.profile}
          />
        ))}
      </div>

      <div className="bg-white shadow-md border border-[#D9D9D9] rounded-2xl p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            Submitted proposals{" "}
            <span className="text-gray-500">({submittedProposals.length})</span>
          </h2>
        </div>
        {submittedProposals.map((proposal, index) => (
          <ProposalCard
            key={index}
            dateInitiated={proposal.dateInitiated}
            timeAgo={proposal.timeAgo}
            projectLink={proposal.projectLink}
            profile={proposal.profile}
          />
        ))}
      </div>
    </div>
  );
};

export default Proposals;