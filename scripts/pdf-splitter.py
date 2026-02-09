import tkinter as tk
from tkinter import filedialog, simpledialog, messagebox
from PyPDF2 import PdfReader, PdfWriter
import os

def split_pdf():
    # Hide main tkinter window
    root = tk.Tk()
    root.withdraw()

    # Select PDF file
    pdf_path = filedialog.askopenfilename(
        title="Select PDF file",
        filetypes=[("PDF Files", "*.pdf")]
    )

    if not pdf_path:
        messagebox.showerror("Error", "No file selected.")
        return

    # Read PDF
    reader = PdfReader(pdf_path)
    total_pages = len(reader.pages)

    # Ask for page range
    start_page = simpledialog.askinteger(
        "Start Page",
        f"Enter start page (1 - {total_pages}):",
        minvalue=1,
        maxvalue=total_pages
    )

    end_page = simpledialog.askinteger(
        "End Page",
        f"Enter end page ({start_page} - {total_pages}):",
        minvalue=start_page,
        maxvalue=total_pages
    )

    if start_page is None or end_page is None:
        messagebox.showerror("Error", "Invalid page range.")
        return

    writer = PdfWriter()

    # Pages are zero-indexed internally
    for page_num in range(start_page - 1, end_page):
        writer.add_page(reader.pages[page_num])

    # Save output file
    base_name = os.path.splitext(os.path.basename(pdf_path))[0]
    output_path = filedialog.asksaveasfilename(
        defaultextension=".pdf",
        initialfile=f"{base_name}_pages_{start_page}_to_{end_page}.pdf",
        filetypes=[("PDF Files", "*.pdf")]
    )

    if not output_path:
        messagebox.showerror("Error", "Save operation cancelled.")
        return

    with open(output_path, "wb") as output_file:
        writer.write(output_file)

    messagebox.showinfo("Success", f"PDF saved successfully:\n{output_path}")

if __name__ == "__main__":
    split_pdf()
