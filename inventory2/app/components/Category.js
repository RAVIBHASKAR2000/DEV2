/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { cx } from "emotion";

const Category = ({ categories }) => {
  console.log("categories values", categories);
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        grid-gap: 1rem;
        grid-row-gap: 2rem;
        padding-bottom: 3rem;
      `}
    >
      {categories.map(cat => {
        return (
          <div key={cat.id} css={{position:'relative'}}>
            <p css={css`
                font-size:120%;
                position:absolute;
                bottom:0;
                text-align:center;
                background-color:rgb(0, 0, 0,0.5);
                color:white;
                width:100%
            `}>{cat.title}</p>
            <div 
             css = {css`
             width: 100%;
             height: 170px;
             overflow: hidden;
             border-radius: 5px;
             &:hover img{
               transform: scale(1.4);
             }
             `}
            >
              <img
                src={cat.image.publicUrl}
                css = {css`
                width: 100%;
                height: 100%;
                // border-radius: 5px;
                transition: all 0.35s ease;
                cursor: pointer;
                `}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
