import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const listItemStyles = {
    margin: '0 auto',
    width: 'auto'
};

const cardStyles = {
    'margin': '20px'
};

const linkStyles = {
    'textDecoration': 'none'
};


export const ProductCard = props => {
    console.log(props);
    const { product } = props;

    return (
        <>
            {product && 
                <Card style={cardStyles}>
                    <CardActionArea style={listItemStyles}>
                        <img className='MuiCardMedia-root' src={`data:image/jpeg;base64, ${product['productProductPhoto.productPhoto.largePhoto']}`}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Type: {product['productSubcategory.name']}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Price: {product.listPrice}$
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {!product['productDescriptionCulture.productDescription.description'] &&
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link
                                    style={linkStyles}
                                    key={product.productId}
                                    to={{
                                        pathname: `/products/productId=${product.productId}`,
                                        productId: product.productId
                                    }}
                                >
                                    Details
                                </Link>
                            </Button>
                        </CardActions>}
                </Card>
            }
        </>
    );
}