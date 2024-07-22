interface DataProfileCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const DataProfileCard: React.FC<DataProfileCardProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <section className="relative z-10 w-full p-8 mb-8 rounded-lg shadow-lg bg-with-glow">
      <div className="flex items-center mb-4">
        <span className="mr-2 text-xl">{icon}</span>
        <h2 className="font-bold text-subtitle1">{title}</h2>
      </div>
      {children}
    </section>
  );
};
