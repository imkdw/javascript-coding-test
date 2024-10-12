function generateMessage(command) {
  switch (command) {
    case "Enter":
      return "님이 들어왔습니다";
    case "Leave":
      return "님이 나갔습니다";
    default:
      return "";
  }
}

/**
 * @param {string[]} records
 */
function solution_me(records) {
  const messages = [];
  const result = [];
  const userInfo = {};

  // id: nickname 형식의 객체 생성
  for (const record of records) {
    const [command, id, nickname] = record.split(" ");
    if (nickname) {
      userInfo[id] = nickname;
    }
  }

  for (const record of records) {
    const [command, id, nickname] = record.split(" ");
    const message = generateMessage(command);
    if (message) {
      messages.push({
        id,
        message,
      });
    }

    if (command === "Change" || command === "Enter") {
      userInfo[id] = nickname;
    }
  }

  for (const item of messages) {
    const { id, message } = item;
    result.push(`${userInfo[id]}${message}`);
  }

  return result;
}

console.log(
  solution_me([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
