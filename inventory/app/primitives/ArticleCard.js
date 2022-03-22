/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const ArticleCard =  ({color = 'white', width = '100%', ...props}) => {
    return (
        <div  
        css={css`
              display: flex;
              padding: 1rem;
              padding-right: 1rem;
              border-bottom: 1px solid rgba(150,150,150,0.4);
              &:hover .article_detail_title{
                  color: orange;
                  transition: all 0.2s ease;
              }
              .article_image {
                  width: 73px;
                  height: 73px;
                  cursor: pointer;
                  min-width: 73px;
                  img {
                      height: 100%;
                      width: 100%;
                      border-radius: 8px;
                  }
              }
              .article_detail {
                  margin-left: 1rem;
                  &_title {
                      margin: 0;
                      font-size: 14px;
                  }
                  &_summary {
                      height: 38px;
                      overflow: hidden;
                      color: #48494a;
                      margin-top: 0.1rem;
                      section {
                          font-size: 0.8rem;
                      }
                  }
              }
            `}
         {...props}
        />
    )
}

export default ArticleCard;