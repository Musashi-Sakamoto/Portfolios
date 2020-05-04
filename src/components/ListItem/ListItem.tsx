import * as React from 'react';

type Props = {
  name: string;
  profession: string;
};

const ListItem: React.FunctionComponent<Props> = ({ name, profession }) => (
  <div>
    <h4>{name}</h4>
    <p>{profession}</p>
  </div>
);

export default ListItem;