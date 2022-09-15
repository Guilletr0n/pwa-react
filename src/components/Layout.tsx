interface LayoutProps {
  height?: string | number | undefined,
  width?: string | number | undefined,
  class?: string | undefined,
  children: React.ReactNode;
}

export default function Layout(props:LayoutProps) {
  
  const styles = {
    minHeight: props?.height,
    maxWidth: 'calc(props.width - 10px)'
  }
  
  return (
    <div style={styles} className={props.class}>
      { props.children }
    </div>
  )
}