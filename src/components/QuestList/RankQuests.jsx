import { useInfoQuests } from "../../provider/quests";
import { useInfoUser } from "../../provider/user";
import { useEffect, useState } from "react";
import Quest from "../Quest";

import {
  BlueDisplayButton,
  DisplayButton,
  QuestsContainer,
  QuestsDisplay,
} from "./styles";

const RankQuests = () => {
  const [show, setShow] = useState(true);

  const {
    getQuests,
    infoQuests,
    addQuest,
    removeQuest,
    getCurrentQuests,
    currentQuests,
  } = useInfoQuests();

  const { infoUser, updateStatus } = useInfoUser();

  const handleUpdate = () => {
    updateStatus(infoQuests);
    getCurrentQuests();
  };

  useEffect(() => {
    getQuests();
    handleUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const currentLevel = infoUser.level;

    updateStatus(infoQuests);

    if (infoUser.level !== currentLevel) {
      setShow(true);
    }
    // eslint-disable-next-line
  }, [infoUser, infoQuests]);

  const showQuests = () => {
    setShow(!show);
    handleUpdate();
  };

  return (
    <QuestsContainer>
      {currentQuests.map((quest, i) => (
        <Quest
          name={quest.title}
          rank={quest.difficulty}
          quest={quest}
          key={i}
          type="ranked"
        />
      ))}
      <BlueDisplayButton onClick={showQuests} variant="outlined" fullWidth>
        Drop quests
      </BlueDisplayButton>
      <QuestsDisplay show={show}>
        <DisplayButton
          variant="contained"
          onClick={showQuests}
          size="large"
          jump
        >
          SHOW QUESTS
        </DisplayButton>
      </QuestsDisplay>
    </QuestsContainer>
  );
};

export default RankQuests;