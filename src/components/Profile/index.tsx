import SupportCard from 'components/SupportCard';
import { Support } from 'datas/support';

export default ({
  name,
  trainerId,
  support,
  stack,
  level,
}: {
  name: String;
  trainerId: Number;
  support: Support;
  stack: 1 | 2 | 3 | 4;
  level: Number;
}) => {
  return (
    <>
      <p>
        {trainerId}
        {name}
      </p>
      <SupportCard support={support} stack={stack} level={level} />
    </>
  );
};
