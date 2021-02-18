import React from 'react'

import { CardArticleStyle } from './styles'

import Arrow from '../../assets/arrow-md.svg'

export default function CardArticle({logo, title, date, description, url}) {
  return (
    <CardArticleStyle href={url}>
      <div className="logo">
        <img src={logo} alt={title}/>
      </div>
      <h3>{title}</h3>
      <span className="date">{date}</span>
      <p>{description}</p>

      <strong>Read the article <Arrow/></strong>
    </CardArticleStyle>
  )
}
