import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Perfume from '../components/Cart/Perfume'; // Assuming Perfume is defined as a type, not a value
import usePerfumes from '../context/Perfumes/usePerfumes';

interface Perfume {
  _id: string;
  name: string;
  price: number;
  type: string;
  aroma: string;
  categoria: string;
  imgUrl: string;
}

const Unisex = () => {
  const { perfumes, loading } = usePerfumes();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredPerfumes, setFilteredPerfumes] = useState<Perfume[]>([]);
  console.log(filteredPerfumes)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = perfumes.filter(
      (perfume) =>
        perfume.name.toLowerCase().includes(query.toLowerCase()) &&
        perfume.categoria === 'unisex'
    );
    setFilteredPerfumes(filtered);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 style={{ marginLeft: '1rem', textAlign: 'center' }}>- Unisex -</h1>
          <iframe
            width="97%"
            height="315"
            src="https://www.youtube.com/embed/e2FvWGSSXTY?si=UkSXYBKUswWATKUU"
            style={{ display: 'block', margin: ' 2rem auto' }}
          />
          <h2 style={{ marginLeft: '1rem' }}>From boardgames to apparels</h2>
          <input
            type="text"
            placeholder="Busca tu perfume favorito aqui..."
            value={searchQuery}
            onChange={handleSearch}
            className='searcher'
          />
          <Row xs={1} md={2} lg={3} className="g-3">
            {(searchQuery ? filteredPerfumes : perfumes.filter(perfume => perfume.categoria === 'unisex'))
            .map((perfume) => (
            <Col key={perfume._id}>
              <Perfume {...perfume} />
            </Col>
          ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Unisex;
