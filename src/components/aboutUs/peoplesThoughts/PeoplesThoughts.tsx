import React from "react";
import PTCard from "./PTCard";

type Props = {};

function PeoplesThoughts({}: Props) {
  const comments: { user: User; comment: UserComment }[] = [
    {
      user: {
        username: "Judy ROSELESS",
        title: "MARKETING HEAD at ROM.",
        img: "/images/other-people/other-people-1.jpg",
      },

      comment: {
        title:
          "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
        text: "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
      },
    },

    {
      user: {
        username: "Judy ROSELESS",
        title: "MARKETING HEAD at ROM.",
        img: "/images/other-people/other-people-1.jpg",
      },
      comment: {
        title:
          "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
        text: "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
      },
    },

    {
      user: {
        username: "Judy ROSELESS",
        title: "MARKETING HEAD at ROM.",
        img: "/images/other-people/other-people-1.jpg",
      },
      comment: {
        title:
          "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
        text: "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
      },
    },

    {
      user: {
        username: "Judy ROSELESS",
        title: "MARKETING HEAD at ROM.",
        img: "/images/other-people/other-people-1.jpg",
      },
      comment: {
        title:
          "Elementum mi felis, sit velit lobortis ultricies non. Mattis enim, nisl",
        text: "adipiscing natoque diam et. Cum posuere in velit massa sagittis augue egestas. Eu sollicitudin et quam eu. Nunc, sed imperdiet blandit morbi. Maecenas lobortis tristique rutrum.",
      },
    },
  ];

  return (
    <div className="peoples-thoughts">
      <div className="peoples-thoughts-container">
        <div className="peoples-thoughts-head">
          <h2 className="title">{"People's Thoughts"}</h2>
          <p>see what are others saying.</p>
        </div>
        <div className="peoples-thoughts-cards">
          {comments.map((item, index) => (
            <PTCard user={item.user} comment={item.comment} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PeoplesThoughts;
