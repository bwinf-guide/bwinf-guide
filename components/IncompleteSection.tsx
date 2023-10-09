import { Callout } from "nextra/components";
import React from "react";
import config from "../theme.config"

const IncompleteSection: React.FC = () => {
  return (
    <Callout type="warning">
      <p>
        Diese Seite ist noch nicht fertig. Wenn du uns helfen möchtest, kannst
        du gerne auf Github <a target="_blank" href={config.project.link + "\\pulls"} className="font-bold text-amber-700 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300">ein Pull Request erstellen</a>. 
      </p>
    </Callout>
  );
}

export default IncompleteSection;
