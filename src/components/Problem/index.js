import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, ProblemView, Description, DateProblem } from './styles';

const Problem = ({ data }) => {
  const dataFormated = useMemo(() => {
    return format(parseISO(data.createdAt), "dd'/'MM'/'yyyy", {
      locale: pt,
    });
  }, [data.createdAt]);

  return (
    <Container>
      <ProblemView>
        <Description>{data.description}</Description>
        <DateProblem adjustsFontSizeToFit={true}>{dataFormated}</DateProblem>
      </ProblemView>
    </Container>
  );
};

export default Problem;
