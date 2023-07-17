interface Props {
    text: string
}

export default function TagText({ text }: Props) {
  
  return (
    <span className="mr-3 text-sm font-semibold uppercase text-primary-500">
        {text.split(' ').join('-')}
    </span>
  );
}
