import { v4 } from "uuid";

const notes = [
  {
    title: "Steve Jobs Quote",
    content:
      "Remembering that I will be dead soon is the most important tool I’ve ever encountered to help me make the big choices in life. Because almost everything all external expectations, all pride, all fear of embarrassment or failure, these things just fall away in the face of death, leaving what is only truly important.",
    tags: [{ tag: "quotes", id: v4() }],
    color: "#cce0ff",
    priority: "high",
    isPinned: false,
    isRead: false,
    date: "27/08/23 2.55 PM",
    createdTime: new Date("aug 08 2023 14:55:22").getTime(),
    editedTime: null,
    id: v4(),
  },
];

export default notes;
