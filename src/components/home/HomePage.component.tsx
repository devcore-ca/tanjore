
interface Props {
	myAge: number;
	myAge1: number;
	myAge2: number;
}

export const HomePageComponent: React.FC<Props> = (props: Props) => {
	return (<div>Hi ${props.myAge1}</div>);
}