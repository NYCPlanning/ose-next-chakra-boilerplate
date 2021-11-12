export interface ListProps {
  items: string[];
}

// This is a placeholder component to show a working unit test
export const List = ({ items }: ListProps) => {
  const foo: number = 'abc';
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i} data-testid="list-item">
          {item}
          {foo}
        </li>
      ))}
    </ul>
  );
};
