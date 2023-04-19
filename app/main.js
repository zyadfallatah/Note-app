export const existStyles = `
overflow: hidden;
flex: 1;

display: grid;
grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
gap: 1rem;

width: 100%;
padding: 1rem 2rem;
align-content: flex-start;
`;

export const emptyStyles = `
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
font-size: 5rem;
width: 100%;
height: 100%;
flex: 1;

background-color: var(--main-clr);
color: var(--main-clr-two);
`;
