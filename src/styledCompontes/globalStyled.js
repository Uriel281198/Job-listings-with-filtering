import bg_header from '../img/bg-header-mobile.svg';
import styled from 'styled-components';

const size = {
  mobile: '375px',
  mobileMedium: '605px',
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};

const colors = {
  primary: `hsl(180, 29%, 50%)`,
  background: `hsl(180, 52%, 96%)`,
  text: `hsl(180, 8%, 52%)`,
  
  backgroundTags: `#efefef `,
}


export const Container = styled.div`    
    background-color:${colors.background};
    width:100%;
    font-family: 'Spartan', sans-serif;       
    @media ${device.tablet}{      
      width:100%;
    }   
    @media ${device.laptop}{            
      width:100%;
    }         
`;

export const HeaderContainer = styled.div`    
    width:100%;
    height:130px;
    background-color:#5da5a4;
    background-image:url(${bg_header}) ;
    background-size:cover;
    margin-bottom:60px;
    @media ${device.tablet}{      
      width:100%;            
    }    
    @media ${device.laptop}{           
      width:100%;            
    }    
`;
export const Tag = styled.span`
    background: ${props => props.blue ? `${colors.primary} `: '#4b4b4b' } ;
    color:#fff;
    margin-left:20px;
    padding:8px;
    font-size:0.8rem;
    border-radius:22px;            
`;

export const Card = styled.div`
    width:90%;
    border-radius:10px;    
    margin:0 auto;    
    margin-bottom:20px;
    background-color:#fff;
    box-shadow: 5px 10px 18px rgba(0,0,0,0.1);    
    border-left:4px solid transparent;    
    margin-bottom:50px;
    &:last-child{
      margin-bottom:25px;
    }
    &:hover{
      border-left:4px solid ${colors.primary};    
      .Title{
        color:${colors.primary}
      }
    }
    .Logo{
      width:15%;
      margin-top:-30px;
      margin-left:25px;
    } 
    .Badges{
      display:flex;
      align-items:center;
      margin-left:25px;
      p{
        color:${colors.primary}
      }      
    }
    .Title{
      margin-left:25px;
      font-size:18px;
      font-weight:700;      
    }
    .Info{
      display:flex;      
      margin-left:25px;
      color:${colors.text};
      margin-right:25px;
      border-bottom:1px solid  hsl(180, 8%, 52%);       
      p{
        margin-right:15px;
      }
    }
    .Tags{      
      margin-left:25px;      
      display:flex;
      flex-wrap:wrap;
      p{  
        margin:0;   
        /*Horizontal,Vertical,radio difuminador,radio se exapende*/
        padding:5px;
        margin:2px;
        margin-right:10px;
        margin-top:10px;
        color:${colors.primary};
        background-color: ${colors.backgroundTags};
        margin-bottom:25px;
        font-weight:700;
        &:hover{
          background:${colors.primary};
          color:white;
          cursor:pointer;
        }    
      }
    }

    @media ${device.tablet}{     
            
      
      width:80%;  
      display:flex;    
      align-items:center;  
      margin-bottom:20px;               
      .Logo{
      width:8%;                        
    } 
    .Badges{
      display:flex;
      align-items:center;
      margin-left:25px;
      p{
        color:${colors.primary}
      }      
    }
    .Title{
      margin-left:25px;
      font-size:18px;
      font-weight:700;      
    }
    .Info{
      display:flex;      
      margin-left:25px;
      color:${colors.text};
      margin-right:25px; 
      margin-bottom:0px;
      border-bottom:none;       
      p{
        margin-right:15px;
      }
    }
    .Tags{      
      margin-left:160px;      
      display:flex;
      flex-wrap:wrap;
      p{  
        margin:0;   
        /*Horizontal,Vertical,radio difuminador,radio se exapende*/
        padding:5px;
        margin:2px;
        margin-right:10px;
        margin-top:10px;
        color:${colors.primary};
        background-color: ${colors.backgroundTags};
        margin-bottom:25px;
        font-weight:700;
        &:hover{
          background:${colors.primary};
          color:white;
          cursor:pointer;
        }    
      }
    }
  }
`;

export const TagsContainer = styled.div`
    width:90%;
    margin:0 auto;
    background:#ffff;
    box-shadow: 5px 10px 18px  rgba(0,0,0,0.2);
    border-radius:5px;
    margin-top:-95px;
    margin-bottom:95px;
    display:${props => props.isFilter ? 'flex': 'none'};
    align-items:center;    
    .Clear{
          font-weight:700;
          color:${colors.text};

          &:hover{
            cursor:pointer;
          }
        }   


    @media ${device.tablet}{     
      width:80%;
    }
            
  `;

export const Tags = styled.div`
     display:flex;
        align-items:center;
        margin-left:25px;
        width:70%;
        flex-wrap:wrap;        
        div{
          margin-right:10px;
          display:flex;
          align-items:center;
          p{
            padding:5px;
            font-weight:700;        
            color:${colors.primary};
            background-color: ${colors.backgroundTags};        
          }
          span{
           background:${colors.primary};
           padding:5px;
           border-radius:0 3px 3px 0;
           color:white;

           &:hover{
             cursor:pointer;
           }
      }
        } 

        
`;

    /*

    
    
    flex-wrap:wrap;
      div{
        display:flex;
        align-items:center;
        margin-left:25px;
        p{          
        /*Horizontal,Vertical,radio difuminador,radio se exapende*/
      /*  padding:5px;
        font-weight:700;        
        color:${colors.primary};
        background-color: ${colors.backgroundTags};
        
        
      }
      span{
        background:${colors.primary};
        padding:5px;
        border-radius:0 3px 3px 0;;



        color:white;
      }
      }
    
      
  

/*### Primary

- Desaturated Dark Cyan: hsl(180, 29%, 50%)

### Neutral

- Light Grayish Cyan (Background): hsl(180, 52%, 96%)
- Light Grayish Cyan (Filter Tablets): hsl(180, 31%, 95%)
- Dark Grayish Cyan: hsl(180, 8%, 52%)
- Very Dark Grayish Cyan: hsl(180, 14%, 20%)

## Typography

### Body Copy

- Font size: 15px

### Headings

- Family: [Spartan](https://fonts.google.com/specimen/Spartan)
- Weights: 500, 700


*/