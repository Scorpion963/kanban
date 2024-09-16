type InputLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    children: React.ReactNode;
  };

export async function InputLabel ({children, ...props}: InputLabelProps) {
    return <label className="text-sm font-medium" {...props}>{children}</label>
}