# 📱 **Do Me!**
**TEAM 15 - 1976087 김제인 2068002 김나영 1976142 박수진 2076293 이남영**    
   
   
## 🗂️ **Folder Structure**
###  screens 
   * CalendarScreen.js 
   * CategoryScreen.js
   * DeleteScreen.js
   * FeedsScreen.js
   * FilterScreen.js
   * MainTab.js
   * RootStack.js
   * SearchScreen.js
   * WriteScreen.js
### components
   * CalendarView.js
   * DateHead.js
   * DeleteButton.js
   * EmptySearchResult.js
   * FeedList.js
   * FeedListItem.js
   * FloatingWriteButton.js
   * JustList.js
   * JustListItem.js
   * SearchHeader.js
   * TransparentCircleButton.js
   * WriteEditor.js
   * WriteHeader.js
### contexts
   * LogContext.js
   * SearchContext.js
### storages
   * logsStorage.js
### assets -> for images
---
## 🗓️ **To-do List App**
![ezgif com-gif-maker](https://user-images.githubusercontent.com/90603530/146142682-315e57a6-a39a-4bb4-aec5-6ebed1f4504c.gif)
### **Enter/edit/remove a to-do item**  
### **Set the due date per to-do item**  
### **Add a comment to a to-do list** 
### **Allow users to set a category for each to-do item (grouping)** 
   1. Enter a to-do item (ex. study science)
   2. Set the due date per to-do item (ex. Calender view and clock view)
   3. Edit a to-do item (ex. comment : take a notebook -> comment : take a science book)
   4. Remove a to-do item (ex. click the delete icon) **with alert message (ex. do you want to delete it?)**
   5. Add a comment a to-do list (ex. take a notebook)
   6. Allow users to set a category for each to-do item (ex. category : study)   
   
   
![ezgif com-gif-maker](https://user-images.githubusercontent.com/90603530/146142076-86cf188c-2422-47cc-bf6a-bd823f82c92b.gif)
### **Show all added to-do items**
### **Check/uncheck a to-do item to mark completion**
   1. Show all added to-do items **with scroll view**
   2. Check/uncheck a to-do item to mark completion **by onLongPress**    
   
   
![ezgif com-gif-maker](https://user-images.githubusercontent.com/90603530/146144129-727de7c2-f731-49b0-bfd4-5565d46ba357.gif)
### **Show only the complete/incomplete to-do items (filtering)**  
### **Sort to-do items in terms of the added date, due date within each category** 
### **Sort to-do items in terms of the added date, due date across categories**  
### **Show/visualize the completion rate per category and per day, week or month**  
   1. Show only the complete/incomplete to-do items **with toggle menu -> Filter menu -> done/undone tasks**
   2. Sort to-do items in terms of the added date, due date within each category **with toggle menu -> Category -> Radio button (Sort by duedate/added date)**
   3. Show/visualize the completion rate per category and per day, week or month 
    * per category : **with toggle menu -> Category -> on each Category Header (expressed by percent(%))**
    * per day : **with Home screen -> on Date Header (expressed by percent(%))**
   4. Sort to-do items in terms of the added date, due date across categories **with Home screen ->  Radio button (Sort by duedate/added date)**    
   
   
![ezgif com-gif-maker](https://user-images.githubusercontent.com/90603530/146145363-28394ada-15db-4a58-9cfe-8ab60b055a88.gif)
### **Select/deselect specific/all to-do items**
### **Delete specific/all to-do items**  
   1. Select/deselect specific/all to-do items **if task is selected, the X mark will be seen by toggling**
   2. Delete specific/all to-do items **by pressing the trash can button"    
   
   
![ezgif com-gif-maker](https://user-images.githubusercontent.com/90603530/146144886-b7cf0bb4-b1f4-48ea-923f-a286d354255a.gif)
### **Search for specific to-do items with a keyword**  
   1. Search for specific to-do items with a keyword (ex. keyword : 'study' or 'hospital')   
   
---              
## 📚 **Libraries used to implement this app**
* react-native-calendars 
  * used in : components/CaldendarView.js
  * to implement CalendarView for selecting duedate
* @react-navigation/native
  * used in : components/DateHead.js
  * to implement screen transition
* date-fns
  * used in : components/WriteHeader.js
  * to control format of date
* date-fns/locale
  * used in : components/FeedListItem.js
  * to express characters in English in CalendarView
* react-native-vector-icons/MaterialIcons
  * used in : components/FloatingWriteButton.js
  * to express WriteButton icon
* react-native-modal-datetime-picker
  * used in : components/WriteHeader.js
  * to select the duedate in CalendarView (this libarary helps to show Calendar in app)
* uuid 
  * used in : contexts/LogContext.js
  * to align unique id for each todo item
* react-native-paper
  * used in : screens/CategoryScreen.js
  * to import RadioButton in this app (for Sorting duedate/added date)
* @react-navigation/bottom-tabs
  * used in : screens/MainTab.js
  * to show bottom-tab for navigating to HomeScreen, CalendarScreen, and SearchScreen
* @react-navigation/native-stack
  * used in : screens/RootStack.js
  * to implement several navigation (from screen navigation by using toggle menu to screen navigation by using bottom-tab)
* @react-native-async-storage/async-storage
  * used in : storages/logsStorages.js
  * to save data from app 
