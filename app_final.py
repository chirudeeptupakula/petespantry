import streamlit as st
from PIL import Image
from backend_final import (load_data, get_nutrition_image_path,
                           validate_student_id, generate_token, dummy_send_mail)
from datetime import datetime

# Set page config
st.set_page_config(page_title="Pete's Platforms", layout="centered")

# Initialize session state variables
if 'show_pantry' not in st.session_state:
    st.session_state.show_pantry = False
if 'show_eat' not in st.session_state:
    st.session_state.show_eat = False

# Function to reset state
def reset_state():
    st.session_state.show_pantry = False
    st.session_state.show_eat = False

# Display title
st.title("Welcome to Pete's Platforms")

# Display logos for selection
col1, col2 = st.columns(2)

# Change the paths of the logos
pantry_logo = Image.open("D:\\hackthon\\Pete'sPantry_logo.jpg").resize((450, 450))
eat_logo = Image.open("D:\\hackthon\\peteseat_logo.jpg").resize((450, 450))

with col1:
    st.image(pantry_logo, width=450)
    if st.button("Go to Pete's Pantry"):
        reset_state()
        st.session_state.show_pantry = True

with col2:
    st.image(eat_logo, width=450)
    if st.button("Go to Pete'seat"):
        reset_state()
        st.session_state.show_eat = True

# Pete's Pantry UI
if st.session_state.show_pantry:
    # Logic from app.py
    data = load_data("D:\\hackthon\\Pete_pantary.xlsx") # Change the path of the excel sheet here.
    st.header("Pete's Pantry")
    category = st.selectbox("Select a Category", options=[""] + list(data.keys()), index=0)
    if category:
        for item, count in data[category]:
            st.write(f"{item} (Count: {count})")
        nutrition_image_path = get_nutrition_image_path(category)
        if nutrition_image_path:
            image = Image.open(nutrition_image_path)
            image = image.resize((330, 450))
            st.image(image, caption="Nutrition Facts")
        else:
            st.write("No nutrition facts available for this category.")

# Pete'seat UI
if st.session_state.show_eat:
    # Logic from app2.py
    tokens_generated = set()
    st.header("PetesEats Token Generator")
    student_id = st.text_input("Student ID", "")
    mail_id = st.text_input("Mail ID", "")
    food_varieties = ["Pizza", "Calzones", "Pasta"]
    food_selection = st.selectbox("Select your food variety", food_varieties)
    if st.button("Generate Token"):
        if not validate_student_id(student_id):
            st.error("Invalid Student ID. Please check the format.")
        else:
            current_time = datetime.now().time()
            if current_time.hour >= 12:
                token = generate_token(student_id, tokens_generated)
                if token:
                    st.success(f"Your token number is {token}.")
                    dummy_send_mail(mail_id, token)  # Simulate email sending
                    st.info("Confirmation mail sent to your mail ID.")
                else:
                    st.error("No tokens left.")
            else:
                st.error("Tokens are not available yet. Please wait until 12 PM.")
