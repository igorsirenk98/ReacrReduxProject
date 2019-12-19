import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const ProductCard = (props) => {
    const { product } = props;

    return (
        <>
            <Link
                className="products__item link"
                key={product.productId}
                to={{
                    pathname: `/products/productId=${product.productId}`,
                    productId: product.productId,
                }}
            >
                <Tooltip title="Click to view details" TransitionComponent={Zoom} arrow>
                    <Card className="card">
                        <CardActionArea className="products__item">
                            <img
                                className="img"
                                src={`data:image/jpeg;base64, ${product.largePhoto}`}
                                alt={product.name}
                            />
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
                    </Card>
                </Tooltip>
            </Link>
        </>
    );
};

export default ProductCard;
