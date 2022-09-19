const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

books
  .sort((a, b) => {
    const nameA = a.author.split(" ").reverse().join(", ");
    const nameB = b.author.split(" ").reverse().join(", ");
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })
  .forEach((bookObj) =>
    book(
      bookObj.img,
      bookObj.title,
      "paragraph text",
      bookObj.author,
      bookObj.alreadyRead
    )
  );

function book(src, title, text, authorname, read) {
  // CARD CONTAINER
  const card = document.createElement("div");
  card.style.maxWidth = "13rem";
  card.style.margin = "1rem";
  card.classList.add("card");

  //1. CHILD -IMG
  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.style.display = "block";
  img.style.size = "cover";
  img.style.objectFit = "cover";
  img.style.height = "250px";
  img.style.border = "3px solid black";
  img.src = src;

  //2.child - CARDBODY
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.style.display = "flex";
  cardBody.style.flexDirection = "column";
  cardBody.style.height = "100%";

  //GRANDCHILDREN
  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.innerText = title;

  const p = document.createElement("p");
  p.classList.add("card-text");
  p.innerText = text;

  const author = document.createElement("p");
  author.innerText = authorname.split(" ").reverse().join(", ");

  const a = document.createElement("a");
  a.classList.add("btn", "btn-danger");
  a.style.width = "100px";
  a.style.borderRadius = "20px";
  a.style.alignSelf = "end";
  a.style.justifySelf = "flex-end";
  if (read) {
    a.classList.remove("btn-danger");
    a.classList.add("btn-success");
  }

  a.innerText = read ? "finished" : "to read";

  //3.child - status
  const statusFooter = document.createElement("div");
  statusFooter.classList.add("status-footer");
  statusFooter.style.alignSelf = "flex-end";
  statusFooter.style.padding = "1rem";

  cardBody.append(h5, author, p);
  statusFooter.append(a);
  card.append(img, cardBody, statusFooter);
  console.log(card);

  const bookList = document.querySelector(".book-list");
  bookList.append(card);
}
