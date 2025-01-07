type Props = {
  points: string[];
};

export const WorkDescription = ({ points }: Props) => (
  <ol className='list-disc pl-4'>
    {points.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ol>
);
