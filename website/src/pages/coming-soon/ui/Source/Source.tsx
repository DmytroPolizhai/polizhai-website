import './source.scss'
import { useTheme } from "@mui/material";

export type SourceProps = {
    id: number,
    title: string,
    iconSrc: string,
    href?: string,
}

export const Source = (props: SourceProps) => {
    const theme = useTheme();
    const styles = {
        background: theme.palette.background.paper,
    }

    return (
      <li>
          <a className="source-container border-hover" style={styles}
             href={props.href} target="_blank" rel="noopener noreferrer" >
              {/* Make icon change color on theme switch */}
              <img className="icon" src={props.iconSrc} alt={`icon for ${props.title}`} />
              <p style={{ color: theme.palette.primary.main }}>{props.title}</p>
          </a>
      </li>
  )
}