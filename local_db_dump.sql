--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: main_warehouse; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.main_warehouse (
    itemid integer NOT NULL,
    supid integer NOT NULL,
    itemlocation character varying(100) NOT NULL,
    lastrestock date,
    cost_of_product numeric(10,2) NOT NULL,
    mainquantity numeric(10,0) NOT NULL
);


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    itemid integer NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    origin character varying(50),
    category character varying(50),
    image_url character varying(255)
);


--
-- Name: suppliers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.suppliers (
    supid integer NOT NULL,
    supname character varying(50) NOT NULL,
    supaddress character varying(100) NOT NULL,
    contact_info character varying(100),
    min_order_quantity numeric(10,0),
    supprice numeric(10,2),
    stock_level character varying(50)
);


--
-- Data for Name: main_warehouse; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.main_warehouse (itemid, supid, itemlocation, lastrestock, cost_of_product, mainquantity) FROM stdin;
1	101	A1	2024-10-01	75.00	200
2	201	A2	2024-10-05	15.00	400
3	301	A3	2024-10-10	10.00	5000
4	401	A4	2024-10-06	20.00	8000
5	501	B1	2024-10-08	10.00	2500
6	601	C1	2024-10-02	3.00	4000
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products (itemid, name, description, price, origin, category, image_url) FROM stdin;
1	Alaskan King Crab	Alaskan king crab in $/lb	84.00	Alaska	seafood	/images/alaskan_king_crab.png
2	New England Homarus Lobster	New England Homarus lobster in $/lb	20.00	Canada/Carolina	seafood	/images/new_england_lobster.png
3	Pacific Manila Clams	Pacific Manila clams in $/lb	15.00	Canada/California	seafood	/images/pacific_manila_clams.png
4	Wild Baja White Shrimp	fresh wild Baja white shrimp in $/lb	29.00	California	seafood	/images/wild_baja_white_shrimp.png
5	Choice Beef Ribeye Steak	boneless USDA choice beef ribeye steak in $/lb	15.00	Canada/Mexico	meats	/images/choice_beef_ribeye_steak.png
6	Chicken Breast	premium chicken breast in $/lb	4.00	Iowa	poultry	/images/chicken_breast.png
\.


--
-- Data for Name: suppliers; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.suppliers (supid, supname, supaddress, contact_info, min_order_quantity, supprice, stock_level) FROM stdin;
101	Oceanic Delights Seafood Co.	123 Pacific Avenue, Anchorage, AK 99501, USA	oceanicdelightsseafoodco@gmail.com	20	75.00	out of stock
201	Neptunes Bounty Seafood Suppliers	456 Ocean Boulevard, Halifax, NS B3H 4R2, Canada	neptunesbountyseafoodsuppliers@gmail.com	20	15.00	low stock
301	Coastal Catch Seafood Distributors	789 Beach Road, San Diego, CA 92109, USA	coastalcatchseafooddistributors@gmail.com	20	10.00	medium stock
401	Pacific Seafood Importers	321 Bay Street, Vancouver, BC V6B 3Y9, Canada	pacificseafoodimporters@gmail.com	20	20.00	medium stock
501	Prime Cuts Meat Supply Co.	555 Ranchero Drive, Calgary, AB T2E 3H9, Canada	primecutsmeatsupplyco@gmail.com	5	10.00	high stock
601	Farm Fresh Poultry Distributors	987 Farm Lane, Des Moines, IA 50309, USA	farmfreshpoultrydistributors@gmail.com	10	3.00	high stock
\.


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (itemid);


--
-- Name: suppliers suppliers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT suppliers_pkey PRIMARY KEY (supid);


--
-- Name: main_warehouse main_warehouse_itemid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.main_warehouse
    ADD CONSTRAINT main_warehouse_itemid_fkey FOREIGN KEY (itemid) REFERENCES public.products(itemid);


--
-- Name: main_warehouse main_warehouse_supid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.main_warehouse
    ADD CONSTRAINT main_warehouse_supid_fkey FOREIGN KEY (supid) REFERENCES public.suppliers(supid);


--
-- PostgreSQL database dump complete
--

