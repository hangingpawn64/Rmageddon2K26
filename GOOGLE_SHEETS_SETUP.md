# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to receive form submissions from your enquiry form.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Rmageddon Enquiries" or "Contact Form Submissions"
4. In the first row, add these headers:
   - **Column A**: Timestamp
   - **Column B**: Name
   - **Column C**: Email
   - **Column D**: Subject
   - **Column E**: Message

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code in the editor
3. Copy and paste the code below:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Create a new row with the form data
    const newRow = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.subject || 'No subject',
      data.message || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(newRow);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': newRow }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function to verify setup
function testPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a test message'
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Click the **Save** icon (💾) and name your project (e.g., "Form Submission Handler")

## Step 3: Deploy the Script as a Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Form submission endpoint" (or anything you like)
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone** (important!)
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **COPY THE WEB APP URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

## Step 4: Update Your React App

1. Open the file: `src/components/EnquiryForm.jsx`
2. Find line 64 where it says:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual URL (the one you copied in Step 3):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Save the file

## Step 5: Test the Form

1. Open your website (should already be running with `npm run dev`)
2. Open the enquiry form
3. Fill in all fields and submit
4. Check your Google Sheet - a new row should appear with the submission data!

## Troubleshooting

### Data not appearing in Google Sheet?
- Make sure you deployed the script as "Anyone" can access
- Check that you copied the correct URL (should end with `/exec`)
- Open the browser console (F12) to check for errors

### "Authorization required" error?
- Go back to Apps Script
- Run the `testPost` function manually to authorize the script
- Click the play button ▶️ next to `testPost` in the Apps Script editor

### Still not working?
- Check the Apps Script execution logs: **View** → **Logs** or **Executions**
- Make sure the sheet has the correct headers in row 1
- Try redeploying the script (Deploy → Manage deployments → Edit → New version)

## Optional Enhancements

### Add Email Notifications
Add this to your Apps Script to get email notifications:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const newRow = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.subject || 'No subject',
      data.message || ''
    ];
    
    sheet.appendRow(newRow);
    
    // Send email notification
    const emailBody = `
New form submission:

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}
Time: ${data.timestamp}
    `;
    
    MailApp.sendEmail({
      to: 'your-email@example.com', // Replace with your email
      subject: 'New Contact Form Submission - Rmageddon',
      body: emailBody
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Data Format

Each submission will create a row with:
- **Timestamp**: When the form was submitted (ISO format)
- **Name**: Sender's name
- **Email**: Sender's email
- **Subject**: Email subject (or "No subject" if empty)
- **Message**: The actual message content

---

**That's it!** Your form should now save all submissions to Google Sheets automatically. 🎉
