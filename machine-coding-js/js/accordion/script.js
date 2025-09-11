const qaArray = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a versatile programming language primarily used for web development.",
    id: 1,
  },
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook.",
    id: 2,
  },
  {
    question: "What is an API?",
    answer:
      "API stands for Application Programming Interface, which allows communication between software applications.",
    id: 3,
  },
  {
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped, while let and const are block-scoped. const cannot be reassigned.",
    id: 4,
  },
  {
    question: "What is a Promise in JavaScript?",
    answer:
      "A Promise is an object that represents the eventual completion or failure of an asynchronous operation.",
    id: 5,
  },
];

const handleClick = (id) => {
    const elem = id.nextElementSibling;
    elem.classList.toggle("hidden");
};

const accordionSection = document.getElementById("accordion-container");
qaArray.forEach((que) => {
  const accContainer = document.createElement("section");
  const accQue = document.createElement("div");
  accQue.textContent = que?.question;
  accQue.onclick = function () {
  handleClick(this);
};

  const accAns = document.createElement("div");
  accAns.textContent = que?.answer;
  if (que?.id !== 1) accAns.className = "hidden";

  accContainer.appendChild(accQue);
  accContainer.appendChild(accAns);
  accordionSection.appendChild(accContainer);
});
