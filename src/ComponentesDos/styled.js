import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const DivImg = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 65%;
  height: 150px;
  margin-top: 4%;
  background: linear-gradient(to right, #3B4856 70%, #F52323 30%);

  @media screen and (max-width: 768px) {
    height: 80px;
    width: 92%;
    margin-top: 15%;
    border-radius: 10px;
  }

`;

export const Logos = styled.img`
width: 100px;

@media (max-width: 768px) {
   width: 50px;
}
`

export const Img = styled.img`
 height: 70px;
 min-width: 70px;

 @media (max-width: 768px) {
  width: 65%;
  margin-left: 5%;
  height: 100px;
 }
`

export const Hand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  img {
    width: 25%;
  }

  button{
    background-color: #bc2c34  ;
    color: #FFFFFF;
    width: 400px;
    font-size: 20px;
    height: 50px;
    border-radius: 5px;
    margin-top: 50px;
    border-color: #F52323;
    font-weight: 500;
    &:hover {
    background-color: #FF3B3B;
  
  }
  }

  h1 {
    margin-top: 40px;
    font-size: 40px;
    font-weight: bolder;
    color: #3B4856;
  }

  p{
    text-align: center;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    margin-top: 150px;

    img {
      width: 85%;
      margin-top: 0px;
    }

    h1{
      font-size: 25px;
    }

    button{
      width: 300px;
      font-size: 15px;
      border-radius: 5px;
    }
  }
`;