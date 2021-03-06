﻿import React from 'react';
import Icons from './Icons';
import { link } from './content.json';

import * as S from './styled';

const SocialLinks = () => (
  <S.SocialLinksList>
    {link.map((link, i) => {
      const Icon = Icons[link.label];

      return (
        <S.SocialLinksItem key={i}>
          <S.SocialLinksLink 
            href={link.url}
            title={link.label}
            target="_blank"
            rel="noopener noreferrer">
            <S.IconWrapper>
              <Icon />
            </S.IconWrapper>
          </S.SocialLinksLink>
        </S.SocialLinksItem>
      )
    })}
  </S.SocialLinksList>
);

export default SocialLinks;
