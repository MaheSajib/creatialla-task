import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProductsCard from '../ProductsCard/ProductsCard';
import './Home.css';
import loadingImg from '../../img/loading.gif';
import Footer from '../Footer/Footer';


const Home = () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const [loadingDiv, setLoadingDiv] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/products?_page=1&_limit=20`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                if (page < 3) {
                    setPage(page + 1);
                }
            })
    }, [])

    const fetchData=() =>{
        fetch(`http://localhost:3000/products?_page=${page}&_limit=20`)
            .then(res => res.json())
            .then(data => {
                if (products.length > 0) {
                    setProducts([...products, ...data]);
                    if (page <= 25) {
                        setPage(page + 1);
                        setLoadingDiv(!loadingDiv)
                    }else{
                        setPage(page)
                        setLoadingDiv(false);
                    }
                }
            })
    } 
    const scrollToEnd = () => {

        setInterval(
            fetchData(), 10000
        )

    }

    window.onscroll = function () {
        if (
            window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        ) {
            scrollToEnd()
            if (products.length < 500) {
                setLoadingDiv(!loadingDiv)
            }else{
                setLoadingDiv(false);
            }
        }
    }
    
    console.log(page, products)

    return (
        <div >
            <Header></Header>
            <div className="emojBack">
                <header className="description">
                    <h1 className="pageTitle">Products Grid</h1>

                    <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. <br /> Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

                    <p>But first, a word from our sponsors:</p>

                    <img className="ad" src={`http://localhost:3000/ads/?r=${Math.floor(Math.random() * 1000)}`} />
                </header>

                <section className="products mb-3">
                    <div className="container product">
                        {
                            products.length > 0 && products.map((pd, i) => <ProductsCard pd={pd} key={i}></ProductsCard>)
                        }
                    </div>

                    <div className="text-center">
                        {loadingDiv && (
                            <img src={loadingImg} alt="" />) 
                        }
                        {
                            products.length === 500 && <p className="text-white">~ end of catalogue ~</p>
                        }

                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;