export const Mailto = ({ email, subject, body, children }) => {
    return (
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
};

export const Linkedin = ({ link, children }) => {
    return (
        <a target="_blank" rel="noreferrer" href={link}>{children}</a>
    );
};

export const OpenUrl = ({ link, children }) => {
    return (
        <a target="_blank" rel="noreferrer" href={link}>{children}</a>
    );
};


