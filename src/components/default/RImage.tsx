import Image from 'next/image'
import styles from '../../styles/components/RImage.module.css'
export function RImage(props){
    return (
        <Image
          //loader={myLoader}
          src={props.src}
          alt={props.alt}
          title={props.title?props.title:'Imagem da Rifa'}
          width={props.width}
          height={props.height}
          className={`img-fluid ${styles.imgBadge}`}
        />
      )
}