// forwarding props allows us to get all extra props that might be sent on our custom Section component here will be forwarded to this Section.
// Syntax: ...props

export default function Section({ title, children, ...props }) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
