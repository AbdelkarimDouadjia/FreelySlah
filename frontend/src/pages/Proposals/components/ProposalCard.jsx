import React from "react";
import PropTypes from "prop-types";

const ProposalCard = ({ dateInitiated, timeAgo, projectLink, profile }) => {
  return (
    <div className="mt-4 border-t pt-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Initiated {dateInitiated}</p>
          <p className="text-xs text-gray-400">{timeAgo}</p>
        </div>
        <a href={projectLink} className="text-green-600 hover:underline">
          Mobile App Development related project
        </a>
        <span className="text-gray-500">{profile}</span>
      </div>
    </div>
  );
};

ProposalCard.propTypes = {
  dateInitiated: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
};

export default ProposalCard;
