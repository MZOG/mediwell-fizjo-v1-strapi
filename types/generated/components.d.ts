import type { Schema, Struct } from '@strapi/strapi';

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {};
}

export interface OfferOfferBlock extends Struct.ComponentSchema {
  collectionName: 'components_offer_offer_blocks';
  info: {
    displayName: 'Offer Block';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface TextTekst extends Struct.ComponentSchema {
  collectionName: 'components_text_teksts';
  info: {
    displayName: 'Tekst';
    icon: 'underline';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image.image': ImageImage;
      'offer.offer-block': OfferOfferBlock;
      'text.tekst': TextTekst;
    }
  }
}
