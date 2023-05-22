import React from "react";
import SubTitle from "../parts/SubTitle";

function Test() {
  return (
    <section className="mb-2 text-xl w-full max-w-4xl  mx-auto">
      <SubTitle Title="3GoodThings" Description="" />
      <div className="">
        <p className="text-left">
          ３GoodThingsとは、毎日自分が経験した３つの良いことを挙げる習慣です。心理学的な研究により、この習慣がストレスや不安を減らし、幸福感を高めることが示されています。
        </p>
        <p className="text-left">
          ３この習慣を始めるためには、毎日同じ時間帯に自分の好きな方法で３つの良いことを挙げます。例えば、美味しい食事をした、友達と話した、好きな本を読んだなど、小さなことでも良いので、自分にとってポジティブな出来事を思い出し、感謝することが大切です。
        </p>
        <p className="text-left">
          ３GoodThingsを継続的に行うことで、ポジティブな思考が身につき、ストレスや不安に対する耐性が上がります。また、自分自身の良い面に気づくことができ、自信を持つことができるようになります。
        </p>
        <p className="text-left">
          毎日続けることが大切ですが、やりすぎないように注意しましょう。また、他人と比べることなく、自分のペースで取り入れていくことが大切です。
        </p>
        <p className="text-left">
          ３GoodThingsを始めて、幸福感を高めてみませんか？
        </p>
      </div>
    </section>
  );
}

export default Test;
