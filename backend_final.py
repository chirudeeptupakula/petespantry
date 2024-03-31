import pandas as pd

def load_data(excel_path):
    """
    Load and process the Excel file, organizing data into a dictionary
    with categories as keys and lists of items and counts as values.
    """
    df = pd.read_excel(excel_path)
    data = {}
    current_category = None
    for index, row in df.iterrows():
        if not pd.isnull(row['Categories']):  # If the first cell contains text, it is a category name
            current_category = row['Categories']
            data[current_category] = []
        elif not pd.isnull(row['Items']) and current_category is not None:  # It's an item in the current category
            item = row['Items']
            count = row['Count'] if not pd.isnull(row['Count']) else 0
            data[current_category].append((item, count))
    return data

# Function from backend.py to get the nutrition image path for Pete's Pantry
# Change the paths
def get_nutrition_image_path(category, base_path="D:\\hackthon\\nutrition"):
    """
    Generate the path to the nutrition facts PNG based on the category.
    Returns None if the category doesn't have a corresponding PNG.
    """
    excluded_categories = ["Households", "Hygiene", "Flex", "Breakfast", "Others"]
    if category in excluded_categories:
        return None
    filename = category.replace(" ", "_").lower() + ".png"
    return f"{base_path}\\{filename}"

def validate_student_id(student_id):
    """
    Validate the student ID format.
    """
    return student_id.startswith('A') and len(student_id) == 9 and student_id[1:].isdigit()

def generate_token(student_id, tokens_generated):
    """
    Generate a token if available.
    """
    if len(tokens_generated) < 5:  # Simple condition to limit tokens
        token = len(tokens_generated) + 1
        tokens_generated.add(token)
        return token
    else:
        return None

def dummy_send_mail(mail_id, token):
    """
    Simulate sending a confirmation email.
    """
    print(f"Confirmation mail sent to {mail_id} with token {token}")
