const reviews = [
  {
    id: 1,
    name: "sara jones",
    job: "ux designer",
    img: "./img/pic1.jpg",
    text: "Outstanding web development services! Fast, reliable, and professional. Our website looks amazing and functions perfectly. Highly recommended!",
  },
  {
    id: 2,
    name: "mary west",
    job: "manager",
    img: "./img/pic2.jpg",
    text: "Exceptional service! Our website's design is sleek and user-friendly. Great communication throughout. Thank you for the fantastic work!",
  },
  {
    id: 3,
    name: "lian lee",
    job: "seo specialist",
    img: "./img/pic3.jpg",
    text: "They delivered beyond our expectations. Our new website is visually stunning and performs seamlessly. Truly top-notch web development.",
  },

  {
    id: 4,
    name: "joseph chan",
    job: "web developer",
    img: "./img/pic4.jpg",
    text: "Fantastic team! They transformed our vision into reality with an amazing website. Efficient, creative, and professional service.",
  },
  {
    id: 5,
    name: "tom andrew",
    job: "softwer developer",
    img: "./img/pic5.jpg",
    text: "Highly impressed with their web development skills. Quick turnaround, excellent design, and very responsive to our needs. Great experience!",
  },
];

const author = document.querySelector(".name");
const img = document.querySelector(".profile-img");
const job = document.querySelector(".job");
const reviewText = document.querySelector(".review-text");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  changePerson(currentItem);
});

const changePerson = (person) => {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  reviewText.textContent = item.text;
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  changePerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  changePerson(currentItem);
});
