"use client";

import Navbar from "@/components/Navbar";
import {
    Box, Button, TextField, Typography, Grid, IconButton, CircularProgress,
    RadioGroup, FormControlLabel, Radio, Divider
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import { getCart, type CartItem, removeFromCart, updateCartItemQuantity } from "@/utils/cart";
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNotification } from '@/context/NotificationContext';
import { useCart } from '@/context/CartContext';

// Define Step Type
type CheckoutStep = 'information' | 'payment';

// Define your WhatsApp number (replace with your actual number)
// Ideally, use an environment variable for this
const WHATSAPP_PHONE_NUMBER = '+96171339879'; // Example placeholder

export default function CartPage() {
    const { cartCount, getCartItems, removeItemFromCart, updateItemQuantity, getCartTotal } = useCart();
    const [isLoading, setIsLoading] = useState(true);
    const [localCartItems, setLocalCartItems] = useState<CartItem[]>([]);

    // --- Checkout State ---
    const [step, setStep] = useState<CheckoutStep>('information');
    const [formData, setFormData] = useState({
        phone: '',
        email: '', // Optional
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
    });
    const [errors, setErrors] = useState<Partial<typeof formData>>({});
    const [paymentMethod, setPaymentMethod] = useState('delivery');
    // ---------------------

    useEffect(() => {
        setLocalCartItems(getCartItems());
        setIsLoading(false);
    }, [getCartItems]);

    const subtotal = localCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = localCartItems.length > 0 ? 5.00 : 0;
    const total = subtotal + shipping;

    const updateLocalCart = () => {
        setLocalCartItems(getCartItems());
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<typeof formData> = {};
        let isValid = true;

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        }
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
            isValid = false;
        }
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
            isValid = false;
        }
        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
            isValid = false;
        }
        if (!formData.postalCode.trim()) {
            newErrors.postalCode = 'Postal code is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleContinueToPayment = () => {
        if (validateForm()) {
            setStep('payment');
        }
    };

    const handleBackToInformation = () => {
        setStep('information');
    };

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod((event.target as HTMLInputElement).value);
    };

    const handlePlaceOrder = () => {
        // Ensure form is valid before proceeding (optional, but good practice)
        if (!validateForm()) return;

        const generateWhatsAppMessage = () => {
            let message = `*New Order*%0A%0A`; // %0A is newline for WhatsApp URL
            message += `*Contact Info:*%0A`;
            message += `  Name: ${formData.firstName} ${formData.lastName}%0A`;
            message += `  Phone: ${WHATSAPP_PHONE_NUMBER.startsWith('+') ? '' : '+961'}${formData.phone}%0A`; // Assuming local number if no prefix
            if(formData.email) message += `  Email: ${formData.email}%0A`;
            message += `%0A*Shipping Address:*%0A`;
            message += `  Address: ${formData.address}%0A`;
            message += `  City: ${formData.city}%0A`;
            message += `  Postal Code: ${formData.postalCode}%0A`;
            message += `%0A*Order Items:*%0A`;

            localCartItems.forEach(item => {
                message += `  - ${item.name} (Size: ${item.size}, Color: ${item.color}) x ${item.quantity}%0A`;
            });

            message += `%0A*Payment Method:* ${paymentMethod === 'delivery' ? 'Cash on Delivery' : 'Credit Card (Details Pending)'}%0A`;
            message += `%0A*Summary:*%0A`;
            message += `  Subtotal: $${subtotal.toFixed(2)}%0A`;
            message += `  Shipping: $${shipping.toFixed(2)}%0A`;
            message += `  *Total:* $${total.toFixed(2)}%0A`;

            message += `%0A*Thank you for your order!*%0A`;

            return message;
        };

        const message = generateWhatsAppMessage();
        // Open WhatsApp link in a new tab
        window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${message}`, '_blank');

        // Optional: Show success notification, clear cart, redirect, etc.
        // showNotification("Order details sent via WhatsApp!", "info");
        // clearCart(); // You might need a clearCart function in your context/utils
        // router.push('/order-confirmation'); // Example redirect
    };

    return (
        <>
            <Navbar />
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 5, px: { xs: 2, md: 10 }, mt: 1 }}>
                <Box>
                    <Typography sx={{ fontSize: 30, fontWeight: 900, mb: 1 }} className="titleFont">CHECKOUT</Typography>

                    <Box sx={{ display: "flex", gap: 5, my: 2, borderBottom: '1px solid #e0e0e0', pb: 1 }}>
                        <Typography sx={{ fontSize: 15, fontWeight: step === 'information' ? 700 : 100, color: step === 'information' ? "var(--secondary)" : "grey" }}>INFORMATION</Typography>
                        <Typography sx={{ fontSize: 15, fontWeight: step === 'payment' ? 700 : 100, color: step === 'payment' ? "var(--secondary)" : "grey" }}>PAYMENT</Typography>
                    </Box>

                    {step === 'information' && (
                        <Box component="form" noValidate autoComplete="off">
                            <Typography sx={{ fontSize: 15, fontWeight: 700, color: "var(--secondary)", mt: 4, mb: 2 }}>CONTACT INFO</Typography>
                            <TextInput name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleInputChange} error={!!errors.phone} helperText={errors.phone} fullWidth />
                            <TextInput name="email" placeholder="Email (Optional)" value={formData.email} onChange={handleInputChange} fullWidth />

                            <Typography sx={{ fontSize: 15, fontWeight: 700, color: "var(--secondary)", mt: 4, mb: 2 }}>SHIPPING ADDRESS</Typography>
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1 }}>
                                <TextInput name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleInputChange} error={!!errors.firstName} helperText={errors.firstName} />
                                <TextInput name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleInputChange} error={!!errors.lastName} helperText={errors.lastName} />
                            </Box>
                            <TextInput name="address" placeholder="Address *" value={formData.address} onChange={handleInputChange} error={!!errors.address} helperText={errors.address} fullWidth />
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1 }}>
                                <TextInput name="city" placeholder="City *" value={formData.city} onChange={handleInputChange} error={!!errors.city} helperText={errors.city} />
                                <TextInput name="postalCode" placeholder="Postal Code *" value={formData.postalCode} onChange={handleInputChange} error={!!errors.postalCode} helperText={errors.postalCode} />
                            </Box>

                            <Button
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                onClick={handleContinueToPayment}
                                sx={{
                                    mt: 4,
                                    width: '100%',
                                    py: 1.5,
                                    backgroundColor: "var(--secondary)",
                                    color: "var(--primary)",
                                    fontWeight: 600,
                                    '&:hover': {
                                        backgroundColor: "var(--secondary-dark, #555)",
                                    }
                                }}
                            >
                                Continue to Payment
                            </Button>
                        </Box>
                    )}

                    {step === 'payment' && (
                        <Box>
                            <Typography sx={{ fontSize: 15, fontWeight: 700, color: "var(--secondary)", mt: 4, mb: 2 }}>PAYMENT METHOD</Typography>
                            <RadioGroup
                                aria-label="payment-method"
                                value={paymentMethod}
                                onChange={handlePaymentMethodChange}
                                name="payment-method-group"
                            >
                                <FormControlLabel value="delivery" control={<Radio />} label="Cash on Delivery" />
                                <FormControlLabel value="card" control={<Radio />} label="Credit Card (Placeholder)" />
                            </RadioGroup>

                            {paymentMethod === 'card' && (
                                <Typography sx={{ mt: 2, fontStyle: 'italic' }}>Credit card form would appear here.</Typography>
                                // TODO: Add Credit Card Form Component here
                            )}

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
                                <Button startIcon={<ArrowBackIcon />} onClick={handleBackToInformation} sx={{ color: "var(--secondary)" }}>
                                    Back to Information
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handlePlaceOrder}
                                    sx={{
                                        py: 1.5, px: 4,
                                        backgroundColor: "var(--secondary)",
                                        color: "var(--primary)",
                                        fontWeight: 600,
                                        '&:hover': {
                                            backgroundColor: "var(--secondary-dark, #555)",
                                        }
                                    }}
                                >
                                    Place Order
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Box>
                <Box sx={{ border: "none", p: 0, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: 30, fontWeight: 900, mb: 1 }} className="titleFont">YOUR ORDER</Typography>

                    <Box sx={{ 
                        border: "1px solid #e0e0e0", 
                        p: 2, 
                        borderRadius: 2,
                        mb: 3,
                        flexGrow: 1,
                        maxHeight: '400px',
                        overflowY: 'auto'
                    }}>
                        {isLoading ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <CircularProgress />
                            </Box>
                        ) : localCartItems.length === 0 ? (
                            <Typography sx={{ textAlign: 'center', color: 'grey.600', mt: 4 }}>Your cart is empty.</Typography>
                        ) : (
                            localCartItems.map((item) => (
                                <CartItem key={`${item.id}-${item.size}-${item.color}`} item={item} updateLocalCart={updateLocalCart} />
                            ))
                        )}
                    </Box>

                    {localCartItems.length > 0 && (
                        <Box sx={{ border: "1px solid #e0e0e0", p: 3, borderRadius: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography sx={{ fontSize: 14 }}>Subtotal</Typography>
                                <Typography sx={{ fontWeight: 600, fontSize: 14 }}>${subtotal.toFixed(2)}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography sx={{ fontSize: 14 }}>Shipping</Typography>
                                <Typography sx={{ fontWeight: 600, fontSize: 14 }}>${shipping.toFixed(2)}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e0e0e0', pt: 2, mt: 2 }}>
                                <Typography sx={{ fontWeight: 700, fontSize: 16 }}>Total</Typography>
                                <Typography sx={{ fontWeight: 700, fontSize: 16 }}>${total.toFixed(2)}</Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    )
}

function TextInput({
    placeholder,
    fullWidth = true,
    name,
    value,
    onChange,
    error,
    helperText
}: {
    placeholder: string,
    fullWidth?: boolean,
    name?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: boolean,
    helperText?: string
}) {
    return (
        <TextField
            placeholder={placeholder}
            variant="outlined"
            fullWidth={fullWidth}
            name={name}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            sx={{
                width: "100%",
                my: 1,
                bgcolor: 'grey.100',
                '& .MuiOutlinedInput-root': {
                    height: 50,
                    '& fieldset': {
                        border: 'none',
                    },
                    '&:hover fieldset': {
                        border: 'none',
                    },
                    '&.Mui-focused fieldset': {
                        border: '1px solid var(--secondary)',
                    },
                },
                '& .MuiInputBase-input::placeholder': {
                    color: 'grey.500',
                    opacity: 1,
                },
                '& .MuiFormHelperText-root': {
                    color: 'red',
                    fontSize: '0.75rem',
                    marginLeft: 0,
                }
            }}
        />
    )
}

function CartItem({ item, updateLocalCart }: { item: CartItem, updateLocalCart: () => void }) {
    const { showNotification } = useNotification();
    const { removeItemFromCart, updateItemQuantity } = useCart();

    const handleRemoveItem = () => {
        removeItemFromCart(item.id, item.size, item.color);
        updateLocalCart();
        showNotification(`${item.name} removed from cart`);
    };

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1) {
            updateItemQuantity(item.id, item.size, item.color, newQuantity);
            updateLocalCart();
        }
    };

    return (
        <Box sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            mb: 2,
            pb: 2,
            borderBottom: '1px solid #e0e0e0'
        }}>
            <Box
                sx={{
                    position: "relative",
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: 1,
                    overflow: 'hidden'
                }}
            >
                <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, gap: 0.5 }}>
                <Typography sx={{ fontSize: 16, fontWeight: 600, color: "var(--secondary)" }}>{item.name}</Typography>
                <Typography sx={{ fontSize: 12, color: 'grey.600' }}>Size: {item.size}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ fontSize: 12, color: 'grey.600' }}>Color:</Typography>
                    <Box sx={{ width: 16, height: 16, bgcolor: item.color, borderRadius: '50%', border: "1px solid #ccc" }}></Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton size="small" onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1}>
                    <RemoveIcon fontSize="inherit" />
                </IconButton>
                <Typography sx={{ fontWeight: 500, minWidth: '20px', textAlign: 'center' }}>{item.quantity}</Typography>
                <IconButton size="small" onClick={() => handleQuantityChange(item.quantity + 1)}>
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </Box>
            <Box sx={{ textAlign: 'right', ml: 2 }}>
                <Typography sx={{ fontSize: 15, fontWeight: 700, color: "var(--secondary)", mb: 1 }}>
                    ${(item.price * item.quantity).toFixed(2)}
                </Typography>
                <IconButton size="small" onClick={handleRemoveItem} sx={{ color: 'grey.500' }}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Box>
        </Box>
    )
}