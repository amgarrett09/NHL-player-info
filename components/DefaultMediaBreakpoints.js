import Responsive from 'react-responsive';

export const Desktop = props => <Responsive {...props} minWidth={798} />;
export const Mobile = props => <Responsive {...props} maxWidth={797} />;
