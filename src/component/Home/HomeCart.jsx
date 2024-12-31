import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Cart1 from '../../images/item-cart-01.jpg'
import Cart2 from '../../images/item-cart-02.jpg'
import Cart3 from '../../images/item-cart-03.jpg'

const HomeCart = ({ setShowCart }) => {
	const [hoveredItem, setHoveredItem] = useState(null);

	const handleRemoveItem = (itemName) => {
		alert(`Remove ${itemName} from cart`); // Replace this with your remove logic
	};

	return (
		<>
			{/* Overlay */}
			<div
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					zIndex: 2000,
				}}
				onClick={() => setShowCart(false)}
			></div>

			{/* Cart Content */}
			<div
				style={{
					position: 'fixed',
					top: 0,
					right: 0,
					width: '400px',
					height: '100%',
					backgroundColor: 'white',
					boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.3)',
					zIndex: 3000,
					overflowY: 'auto',
				}}
			>
				{/* Cart Header */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: '16px',
						borderBottom: '1px solid #ddd',
					}}
				>
					<h3 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>
						Your Cart
					</h3>
					<button
						onClick={() => setShowCart(false)}
						style={{
							background: 'none',
							border: 'none',
							fontSize: '24px',
							cursor: 'pointer',
						}}
					>
						✕
					</button>
				</div>

				{/* Cart Items */}
				<ul style={{ listStyle: 'none', padding: '16px', margin: 0 }}>
					{/* Item 1 */}
					<li
						style={{
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
							marginBottom: '16px',
						}}
						onMouseEnter={() => setHoveredItem('White Shirt Pleat')}
						onMouseLeave={() => setHoveredItem(null)}
					>
						<div style={{ width: '80px', height: '80px', marginRight: '16px', position: 'relative' }}>
							<img
								src={Cart1}
								alt="Cart item"
								style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							/>
							{hoveredItem === 'White Shirt Pleat' && (
								<button
									onClick={() => handleRemoveItem('White Shirt Pleat')}
									style={{
										position: 'absolute',
										top: '-10px',
										right: '-10px',
										background: 'red',
										border: 'none',
										borderRadius: '50%',
										width: '24px',
										height: '24px',
										color: 'white',
										fontSize: '14px',
										cursor: 'pointer',
									}}
								>
									✕
								</button>
							)}
						</div>
						<div>
							<a
								href="#"
								style={{
									display: 'block',
									fontSize: '16px',
									color: '#333',
									textDecoration: 'none',
									fontWeight: 'bold',
								}}
							>
								White Shirt Pleat
							</a>
							<span style={{ fontSize: '14px', color: '#666' }}>
								1 x $19.00
							</span>
						</div>
					</li>

					{/* Repeat similar blocks for other items */}
					<li
						style={{
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
							marginBottom: '16px',
						}}
						onMouseEnter={() => setHoveredItem('Converse All Star')}
						onMouseLeave={() => setHoveredItem(null)}
					>
						<div style={{ width: '80px', height: '80px', marginRight: '16px', position: 'relative' }}>
							<img
								src={Cart2}
								alt="Cart item"
								style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							/>
							{hoveredItem === 'Converse All Star' && (
								<button
									onClick={() => handleRemoveItem('Converse All Star')}
									style={{
										position: 'absolute',
										top: '-10px',
										right: '-10px',
										background: 'red',
										border: 'none',
										borderRadius: '50%',
										width: '24px',
										height: '24px',
										color: 'white',
										fontSize: '14px',
										cursor: 'pointer',
									}}
								>
									✕
								</button>
							)}
						</div>
						<div>
							<a
								href="#"
								style={{
									display: 'block',
									fontSize: '16px',
									color: '#333',
									textDecoration: 'none',
									fontWeight: 'bold',
								}}
							>
								Converse All Star
							</a>
							<span style={{ fontSize: '14px', color: '#666' }}>
								1 x $39.00
							</span>
						</div>
					</li>
				</ul>

				{/* Cart Total */}
				<div
					style={{
						padding: '16px',
						borderTop: '1px solid #ddd',
						textAlign: 'center',
						fontSize: '18px',
						fontWeight: 'bold',
					}}
				>
					Total: $58.00
				</div>
				{/* Cart Button */}
				< div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						padding: '16px',
					}}
				>
					<Link
						to="/features"
						style={{
							display: 'inline-block',
							width: '48%',
							textAlign: 'center',
							padding: '10px',
							backgroundColor: '#333',
							color: '#fff',
							textDecoration: 'none',
							borderRadius: '50px',
						}}
					>
						View Cart
					</Link>
					<Link
						to="/features"
						style={{
							display: 'inline-block',
							width: '48%',
							textAlign: 'center',
							padding: '10px',
							backgroundColor: '#333',
							color: '#fff',
							textDecoration: 'none',
							borderRadius: '50px',
						}}
					>
						Check Out
					</Link>
				</div>
			</div>
		</>
	);
};

export default HomeCart