import styled from '@emotion/styled'

export const StatsSection = styled.div`
margin: 0 auto;
width: 800px;
background-color: #ffffff;
padding-bottom: 15px;
`;
export const StatsTitle = styled.h2`
 margin-top: 15px;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.25;
  text-align: center;
  color: #000000;
`;
export const StatsContent = styled.ul`
 width: 600px;
display: flex;
justify-content: space-between;
background-color: #eeeeee;
border: 1px solid #999999;
margin: 0 auto;
`;
export const StatsList = styled.li`
 display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 20px;
  flex-basis: calc(100% / 3);
  &:not(:last-child) {
    border-right: 1px solid #999999;
  }
`;
export const StatsName = styled.span`
margin: 0 auto;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
  color: #999999;
`;

export const StatsNumber = styled.span`
margin: 0 auto;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.25;
`;