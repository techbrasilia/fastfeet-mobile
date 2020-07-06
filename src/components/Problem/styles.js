import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`;

export const ProblemView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  margin-top: 5px;
  border: 1px solid #0000001a;
  padding: 25px 15px;
  border-radius: 4px;
`;
export const Description = styled.Text`
  font-size: 20px;
  color: #999999;
  font-weight: bold;
  max-width: 230px;
`;
export const DateProblem = styled.Text`
  font-size: 16px;
  color: #999999;
`;
